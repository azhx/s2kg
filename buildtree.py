import requests
import pandas as pd
import json
import numpy as np
import copy
import textwrap
import time
from collections import deque

global q, breadth, graphdict, refdict

api_base = "https://api.semanticscholar.org/v1/paper/"
refdict = {"arxivId":[],"authors":[],"citationVelocity":[],"num_citations":[],
           "corpusId":[],"doi":[],"fieldsOfStudy":[], "influentialCitationCount":[],
           "is_open_access":[], "is_publisher_licensed":[],"paperId":[],"num_references":[],
           "title":[],"topics":[],"url":[],"venue":[],"year":[], "parent": []}
graphdict = copy.deepcopy(refdict)


def add_record(res, parent):
    for each in list(graphdict.keys()):
        if each == 'num_citations':
            try:
                graphdict[each].append(len(res['citations']))
            except:
                graphdict[each].append(None)
        elif each =='num_references':
            try:
                graphdict[each].append(len(res['references']))
            except:
                graphdict[each].append(None)
        elif each == 'parent':
            graphdict[each].append(parent)
        else:
            try:
                graphdict[each].append(res[each])
            except:
                graphdict[each].append(None)
    """graphdict['authors'].append(res['authors'])
    graphdict['citationVelocity'].append(res['citationVelocity'])
    graphdict['num_citations'].append(len(res['citations']))
    graphdict['corpusId'].append(res['corpusId'])
    graphdict['doi'].append(res['doi'])
    graphdict['fieldsOfStudy'].append(res['fieldsOfStudy'])
    graphdict['influentialCitationCount'].append(res['influentialCitationCount'])
    graphdict['is_open_access'].append(res['is_open_access'])
    graphdict['paperId'].append(res['paperId'])
    graphdict['is_publisher_licensed'].append(res['is_publisher_licensed'])
    graphdict['num_references'].append(len(res['references']))
    graphdict['title'].append(res['title'])
    graphdict['topics'].append(res['topics'])
    graphdict['url'].append(res['url'])
    graphdict['venue'].append(res['venue'])
    graphdict['year'].append(res['year'])
    graphdict['parent'].append(parent)"""
    return len(graphdict['parent'])-1

def resolve_accessor(res):
    if res['doi'] == None:
        if res['arxivId'] == None:
            if res['paperId'] == None:
                return(None)
            else:
                return(res['paperId'])
        else:
            return('arxiv:' + res['arxivId'])
    else:
        return(res['doi'])

q = deque()
breadth = 3
max_depth = 6
call_count = 0
doi = "arXiv:1703.06870"
def find_qualified_children(access, depth=0, parent =-1):
    global icc, res, call_count, max_depth
    call_count +=1
    if (call_count %10 == 0):
        print('sleeping for 10 seconds')
        time.sleep(10)
    print('depth =', depth)
    print('looking in ' + access)    
    res = json.loads(requests.get(api_base+access).text)
    try:
        assert len(res)>1
    except Exception as e:
        print(res.keys())
        print(e)
    parent = add_record(res, parent)
    if depth == max_depth:
        try:
            nextaccess, _, depth, parent = q.popleft()
            find_qualified_children(nextaccess, depth, parent)
            return
        except Exception as e:
            print(e)
            return
    topnchildren = [('',-1)]*breadth
    try:
        res_refs = res['references']
        for ref in res_refs:
            if ref['isInfluential'] == True:
                child_accessor = resolve_accessor(ref)
                if child_accessor == None:
                    print("skipped")
                    continue
                child = json.loads(requests.get(api_base+child_accessor).text)
                try:
                    icc = child['influentialCitationCount']
                except Exception as e:
                    print(e)
                    print("not in s2 database")
                    continue
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
    except Exception as e:
        print(e)
        try:
            nextaccess, _, depth, parent = q.popleft()
            find_qualified_children(nextaccess, depth, parent)
            print('res_not_found')
            return
        except Exception as e:
            print(e)
            print('exception_to_the_exception')
            print(res.keys())
            return 


def get_data(accessor):
    global graphdict
    graphdict = copy.deepcopy(refdict)
    find_qualified_children(accessor)
    print(q)
    pd.DataFrame.from_dict(graphdict).to_csv("graph.csv", index = False)
    graph = {'nodes':[], 'edges':[]}
    print(graphdict, refdict)
    wrapper = textwrap.TextWrapper(width=30) 
    for i, v in enumerate(graphdict['title']):
        wordlist = wrapper.wrap(text=v)
        graph['nodes'].append({ 
            'id':i,
            'label':'\n'.join(wordlist),
            'title':graphdict['num_citations'][i],
            'size':graphdict['num_citations'][i]/100
        })
        graph['edges'].append({
            'from':graphdict['parent'][i],
            'to':i
        })
    return graph
#find_qualified_children("arXiv:1703.06870")
