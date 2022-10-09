import requests
import pandas as pd
import json
import copy
import textwrap
import time
from collections import deque

api_base = "https://api.semanticscholar.org/v1/paper/"

def add_record(res, parent, depth, graphdict):
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
        elif each == 'depth':
            graphdict[each].append(depth)
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
    return len(graphdict['parent'])-1, graphdict

def resolve_accessor(res):
    if res['doi'] == None:        
        #if res['corpusId'] == None:
            if res['arxivId'] == None:
                if res['paperId'] == None:
                    return(None)
                else:
                    return(res['paperId'])
            else:
                return('arxiv:' + res['arxivId'])
        #else:
        #    return(res['corpusId'])
    else:
        return(res['doi'])

def check_paper(ref, parent, depth, topnchildren, breadth):
    icc = 0
    child_accessor = resolve_accessor(ref)
    if child_accessor == None:
        print("skipped")
        return topnchildren
    child = json.loads(requests.get(api_base+child_accessor).text)
    try:
        icc = child['influentialCitationCount']
    except KeyError:
        print("not in s2 database")
    topnchildren.append((child_accessor, icc, depth+1, parent))
    topnchildren.sort(key=lambda tup: tup[1], reverse=True)
    return topnchildren[:breadth]

#max_depth = 1
#doi = "arXiv:1703.06870"
def find_qualified_children(q, graphdict, access, breadth, depth=0, parent =-1):
    #check for duplicates within current names. do not include them in the response
    print('depth =', depth)
    print(access)
    res = json.loads(requests.get(api_base+access).text)
    parent, graphdict = add_record(res, parent, depth, graphdict)
    if depth == 1:
        try:
            nextaccess, _, depth, parent = q.popleft()
            find_qualified_children(q, graphdict, nextaccess, breadth, depth, parent)
        except:
            return graphdict
        return graphdict
    res_ref = res['references']
    topnchildren = [('',-1)]*len(res['references']) if (breadth == -1) else [('',-1)]*breadth
    for ref in res_ref: 
        if (breadth != -1) and (ref['isInfluential'] == True):
            topnchildren = check_paper(ref, parent, depth, topnchildren, breadth)
        elif (breadth == -1):
            topnchildren = check_paper(ref, parent, depth, topnchildren, len(res['references'])) 
    print('topn =', topnchildren, 'q length = ', len(q))
    for each in topnchildren:
        if each[0] != '':
            print(f"appended {each[0]}")
            q.append(each)
    nextaccess, _, depth, parent = q.popleft() 
    find_qualified_children(q, graphdict, nextaccess, breadth, depth, parent)
    if len(q) == 0:
        return graphdict

def get_data(accessor, breadth): 
    graphdict = {"arxivId":[],"authors":[],"citationVelocity":[],"num_citations":[], "abstract":[],
           "corpusId":[],"doi":[],"fieldsOfStudy":[], "influentialCitationCount":[],
           "is_open_access":[], "is_publisher_licensed":[],"paperId":[],"num_references":[],
           "title":[],"topics":[],"url":[],"venue":[],"year":[], "parent": [], "depth":[]}
    q = deque()
    print(graphdict)
    graphdict = find_qualified_children(q, graphdict, accessor, breadth = breadth)
    pd.DataFrame.from_dict(graphdict).to_csv("graph.csv", index = False)
    graph = {'nodes':[], 'edges':[]}
    wrapper = textwrap.TextWrapper(width=30)
    for i, v in enumerate(graphdict['title']):
        wordlist = wrapper.wrap(text=v)
        velocity = graphdict['citationVelocity'][i]
        graph['nodes'].append({ 
            'id':i,
            'label':'\n'.join(wordlist),
            'articletitle': graphdict['title'],
            'authors': graphdict['authors'],
            'title':graphdict['num_citations'][i],
            'velocity': velocity,
            'size':10*(math.log(graphdict['num_citations'][i])),
            'level':graphdict['depth'][i],
            'url':graphdict['url'][i],
            'color': { 'background': f'rgba({75-(velocity/10)}, {78-(velocity/10)}, {91-(velocity/10)}, 1)',
                        'border': f'rgba(25, 28, 41, 1)',
                        'highlight': {
                            'border': f'rgba(25, 28, 41, 1)',
                            'background': 'rgba(155, 158, 171, 1)'
                        }},
            'abstract':graphdict['abstract'][i]
        })
        print(graph['nodes'])
        if i > 0:
            graph['edges'].append({
                'from':graphdict['parent'][i],
                'to':i
            })
    return graph