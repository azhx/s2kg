import requests
import pandas as pd
import json
import numpy as np
from collections import deque

global q, breadth

api_base = "https://api.semanticscholar.org/v1/paper/"
refdict = {"arxivId":[],"authors":[],"citationVelocity":[],"num_citations":[],
           "corpusId":[],"doi":[],"fieldsOfStudy":[], "influentialCitationCount":[],
           "is_open_access":[], "is_publisher_licensed":[],"paperId":[],"num_references":[],
           "title":[],"topics":[],"url":[],"venue":[],"year":[], "parent": []}
    

def add_record(res, parent):
    refdict['arxivId'].append(res['arxivId'])
    refdict['authors'].append(res['authors'])
    refdict['citationVelocity'].append(res['citationVelocity'])
    refdict['num_citations'].append(len(res['citations']))
    refdict['corpusId'].append(res['corpusId'])
    refdict['doi'].append(res['doi'])
    refdict['fieldsOfStudy'].append(res['fieldsOfStudy'])
    refdict['influentialCitationCount'].append(res['influentialCitationCount'])
    refdict['is_open_access'].append(res['is_open_access'])
    refdict['paperId'].append(res['paperId'])
    refdict['is_publisher_licensed'].append(res['is_publisher_licensed'])
    refdict['num_references'].append(len(res['references']))
    refdict['title'].append(res['title'])
    refdict['topics'].append(res['topics'])
    refdict['url'].append(res['url'])
    refdict['venue'].append(res['venue'])
    refdict['year'].append(res['year'])
    refdict['parent'].append(parent)
    return len(refdict['parent'])-1

def resolve_accessor(res):
    if res['arxivId'] == None:
        if res['paperId'] == None:
            if res['doi'] == None:
                return(None)
            else:
                return(res['doi'])
        else:
            return(res['paperId'])
    else:
        return('arxiv:' + res['arxivId'])

q = deque()
breadth = 3
max_depth = 2
doi = "arXiv:1703.06870"
def find_qualified_children(access, depth=0, parent =-1):
    print('depth =', depth)
    res = json.loads(requests.get(api_base+access).text)
    parent = add_record(res, parent)
    if depth == max_depth:
        try:
            nextaccess, _, depth, parent = q.popleft()
            find_qualified_children(nextaccess, depth, parent)
        except:
            return
        return
    topnchildren = [('',-1)]*breadth
    for ref in res['references']:
        if ref['isInfluential'] == True:
            child_accessor = resolve_accessor(ref)
            if child_accessor == None:
                print("skipped")
                continue
            child = json.loads(requests.get(api_base+child_accessor).text)
            try:
                icc = child['influentialCitationCount']
            except KeyError:
                print("not in s2 database")
            topnchildren.append((child_accessor, icc, depth+1, parent))
            topnchildren.sort(key=lambda tup: tup[1], reverse=True)
            topnchildren = topnchildren[:breadth]
    print('topn =', topnchildren, 'q length = ', len(q))
    for each in topnchildren:
        if each[0] != '':
            print(f"appended {each[0]}")
            q.append(each)
    nextaccess, _, depth, parent = q.popleft() 
    find_qualified_children(nextaccess, depth, parent)
    if len(q) == 0:
        return

def get_data(accessor):
    find_qualified_children(accessor)
    graph = {'nodes':[], 'edges':[]}
    for i, v in enumerate(refdict['title']):
        graph['nodes'].append({
            'id':i,
            'label':v,
            'title':refdict['influentialCitationCount'][i]
        })
        graph['edges'].append({
            'from':refdict['parent'][i],
            'to':i
        })
    return graph
#find_qualified_children("arXiv:1703.06870")
