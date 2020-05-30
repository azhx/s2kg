//import React from 'react'
//import classNames from 'classnames'
import React, { createRef } from "react";
import ReactDOM from 'react-dom'
import Sidebar from "./sidebar";
import Searchbar from "./searchbar";
import { DataSet, Network } from 'vis-network/standalone/esm/vis-network';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import { Button } from "semantic-ui-react";

const nodes = new DataSet()
const edges = new DataSet()

const data = {
  nodes: nodes,
  edges: edges
};
var options = {
layout: {
  hierarchical: {
    enabled: true,
    levelSeparation: 200,
    nodeSpacing: 200,
    treeSpacing: 200,
  }
  
},
edges: {
    color: {
        color:'#B8B8B8',
        highlight:'#B8B8B8',
        hover: '#B8B8B8',
        inherit: 'from',
        opacity:1.0
    },
    arrows: {
    to: {
      enabled: true
    }
  },
  smooth: {
    enabled: true,
    type: "dynamic",
    roundness: 0.5
  }
},
interaction: {
  tooltipDelay: 0
},
nodes: {
  shape: 'dot'
},
physics: {
    enabled: false,
    barnesHut: {
    avoidOverlap: 1.5,
    centralGravity:0.005,
    springLength:500,
    gravitationalConstant:-26,
    springConstant:0.18
    },
    hierarchicalRepulsion:{
        avoidOverlap:50
    },
}
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.nodes = nodes;
    this.edges = edges;
    this.data = data;
    this.options = options; // may be unnecessary
    this.addnode = this.addnode.bind(this);
    this.toggleHierarchy = this.toggleHierarchy.bind(this);
    this.presets = this.presets.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    //this.updateAccessor = this.updateAccessor.bind(this);
    this.nodemap = {};
    this.edgemap = {};
    this.state = {
      nodeUpdate : [],
      edgeUpdate : [],
      input: '',
      searchbarVal: undefined,
      accessor: '',//"10.1109/CVPR.2018.00762",
      breadth: 3,
      selectednode: {},
      growing: false,
      menuOpen: false
    };
    this.network = null;
    this.appRef = createRef();    
  }

/*updateAccessor = (clickedNode) => {
    this.state.accessor = clickedNode;
  }
*/
  handleChange = (e, data) => {
    this.setState({breadth: data.value});
  }
  handleMessage = (e, data) => {
    console.log('handleMessage')
    this.setState({input: data.value});
  }
  toggleHierarchy = () => {
    console.log(this.options)
    /*let hierarchy = this.options.layout.hierarchical['enabled'];
    if (hierarchy == true){
      this.options.layout.hierarchical['enabled'] = false;
      this.options.physics['enabled'] = true
      this.network.setOptions(this.options)
    }*/
    this.options.layout.hierarchical['enabled'] = true;
    this.options.physics['enabled'] = false
    this.network = new Network(this.appRef.current, this.data, this.options);
    this.presets()
  }

  presets = () => {
    this.network.on( 'click', function(properties) {
      let ids = properties.nodes;
      let clickedNodes = nodes.get(ids);
      console.log('clicked nodes:', clickedNodes);
      this.setState({selectednode: clickedNodes[0]});
      if (clickedNodes.length == 0){
        console.log('closed')
        this.setState({menuOpen: false})
      } else {
        console.log('opened')
        this.setState({searchbarVal: ''})
        this.setState({searchbarVal: undefined})
        this.setState({menuOpen : true})
      }
    }.bind(this));
    this.options.layout.hierarchical['enabled'] = false;
    this.options.physics['enabled'] = true
    this.network.setOptions(this.options)
  }

  componentDidMount() {
    this.network = new Network(this.appRef.current, this.data, this.options);
    console.log('called')
    this.presets();
    window.network = this
  }

  computeUpdates = (graph) => {
    /*If any node is a duplicate, do not connect it again
    Instead, add the edge from the source to the node already in the graph
    if both the */
    //If node is not a duplicate, add it to the graph and add the connect
    var nodesToAdd = [] //list of obj
    var edgemapToAdd = {} // {0:[1,2,3]}
    var edgesToAdd = [] // list of obj
    for (var i = 0; i < graph.nodes.length; i++){
      if (!(graph.nodes[i]['label'] in this.nodemap)){ // if node is not a duplicate, add
        graph.nodes[i]['id'] = i + this.nodes.length
        if ((i > 0) && (!nodemap[graph.nodes[0]['label']] == false)){
          graph.nodes[i]['level'] = graph.nodes[]['level']+1
        }
        nodesToAdd.push(graph.nodes[i])
      }
    }
    for (var i = 0; i < graph.edges.length; i++){ //if edge not already in edgemap, add edge to net and edgemap
      if (this.state.growing == true){
        //only if we're growing leaves on the tree, look in the nodemap
        graph.edges[i]['from'] = this.nodemap[graph.nodes[0]['label']]
      }
      graph.edges[i]['to'] += this.nodes.length
      if ((!this.edgemap[graph.edges[i]['from']]) || 
        (!this.edgemap[graph.edges[i]['from']].includes(graph.edges[i]['to']))){
        //correct indices to what they should be on write
        //look at the first node in the res graph to find its name, then find its index to which
        //we should attach the edges
        edgesToAdd.push(graph.edges[i])
        //because of the above line, we have to directly change the properties of each edge object
        if (!edgemapToAdd[graph.edges[i]['from']]){
          edgemapToAdd[graph.edges[i]['from']] = [graph.edges[i]['to']]
        } else {
          edgemapToAdd[graph.edges[i]['from']].push(graph.edges[i]['to'])
        }
      }
    }
    console.log('edgesToAdd', edgesToAdd)
    for (var i = 0; i < nodesToAdd.length; i++){
      this.nodemap[nodesToAdd[i]['label']] = i + this.nodes.length
    }

    for (var key in edgemapToAdd){
      if (!(this.edgemap[key])){
        this.edgemap[key] = edgemapToAdd[key]
      } else {
        this.edgemap[key] = this.edgemap[key].concat(edgemapToAdd[key])
      }
    }
    console.log(this.nodemap)
    console.log(this.edgemap)
    this.setState({nodeUpdate: nodesToAdd})
    this.setState({edgeUpdate: edgesToAdd})
    return
  }

  fetchGraph = async () => {
    if ((this.state.input == '') && (this.state.selectednode.hasOwnProperty('url'))){
      let accessor = this.state.selectednode['url'].split('/')
      this.state.accessor = accessor[accessor.length-1]
      this.state.growing = true
    } else {
      this.state.accessor = this.state.input
      this.state.growing = false
      this.state.nodemap = {}
      this.state.edgemap = {}
    }
    console.log("accessor!", this.state.accessor)
    let toastId = toast(<div style = {{"textAlign": "center"}}><p>Looking in {this.state.accessor}...</p>
    <ClipLoader
      size = {15}
      color = {"#000000"}/></div>);
    let res = await fetch('/buildgraph?accessor='+ this.state.accessor + '&breadth='+ this.state.breadth);
    let graph = await res.json();
    if (graph.hasOwnProperty('error')){
      toast.dismiss(toastId);
      toast.error(<div style = {{"textAlign": "center"}}>
      <p>Something went wrong.</p>
      <p>We probably couldn't find the paper you were looking for</p>
      </div>, {
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      closeButton: true,
      autoClose: 5000,
      progress: undefined
    })
    } else {
      console.log(graph)
      this.computeUpdates(graph)
      /*
      this.state.nodeUpdate = updates[0]
      this.state.edgeUpdate = updates[1]
      this.setState({nodeUpdate: graph.nodes})
      this.setState({edgeUpdate: graph.edges})*/
      toast.dismiss(toastId);
      toast.success(<div style = {{"textAlign": "center"}}>
        <p>Added {Object.keys(this.state.nodeUpdate).length} nodes to the graph</p>
        </div>, {
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        closeButton: true,
        autoClose: 5000,
        progress: undefined
      })
    }    
  }

  addnode = async () => {
    await this.fetchGraph();
    if (Object.keys(this.state.nodeUpdate).length > 0){
      if (this.state.growing == false){
        this.edges.clear() 
        this.nodes.clear()
      }
      console.log(this.state.growing)
      this.nodes.update(this.state.nodeUpdate);
      this.edges.update(this.state.edgeUpdate);
      if (this.state.growing == false){
        this.toggleHierarchy()
      }
    }
    this.state.input = ''
  }


  render() {
    const wrap = (props) => {
      return (
      <div id="App">
        <Sidebar {...props} 
          addnode = {this.addnode} 
          toggleHierarchy = {this.toggleHierarchy}
          selectednode = {this.state.selectednode}
          menuOpen = {this.state.menuOpen}
        />
        <div id = "network" style = {{height:"100vh"}} ref={this.appRef}/>
        <div id = "searchbar" style = {{position: "absolute", top:"7.1vh", 
                                        left:"50%", transform: "translate(-50%,-50%)"}}> 
          <Searchbar 
            handleChange = {this.handleChange}
            handleMessage = {this.handleMessage}
            addnode = {this.addnode}
            searchbarVal = {this.state.searchbarVal}
            selectednode = {this.state.selectednode}
          />
        </div>
        <Button style = {{position: "absolute", right:"-1%", top:"7.1vh", transform: "translate(-50%, -50%)"}} onClick={this.toggleHierarchy}>Reset</Button>
        <ToastContainer
          position="bottom-center"
          autoClose={false}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          closeButton={false}
        />
      </div>
      );
    }
    return wrap()
  }
}

var app = ReactDOM.render(<App/>, document.querySelector('#container'))
//import VisNetwork from "./network";
//import "./styles.css";
/*
const nodes = new vis.DataSet([
  { id: 1, label: 'Node 1' , title:'This is a tooltip<br>TOOLip NEWline!!!'},
  { id: 2, label: 'Node 2' , title:'This is a tooltip'},
  { id: 3, label: 'Node 3' , title:'This is a tooltip'},
  { id: 4, label: 'Node 4' , title:'This is a tooltip'},
  { id: 5, label: 'Node 5' , title:'This is a tooltip'}
]);

// create an array with edges
const edges = new vis.DataSet([
  { from: 1, to: 3 },
  { from: 1, to: 2 },
  { from: 2, to: 4 },
  { from: 2, to: 5 }
]);

const data = {
  nodes: nodes,
  edges: edges
};
const options = {
  layout: {
      hierarchical: false
  },
  edges: {
      color: "#000000",
      arrows:{
      to:{
          enabled:true
      }  
      },
      smooth: {
          enabled: true,
          type: "dynamic",
          roundness: 0.5
      }
  },
  interaction: {
      tooltipDelay: 0
  }    
}

// initialize your network!

class VisNetwork extends Component {

  constructor() {
    super();
    this.network = {};
    this.appRef = createRef();
  }

  componentDidMount() {
    this.network = new vis.Network(this.appRef.current, data, options);
  }

  render() {
    return (
      <div style = {{height:"100vh"}} ref={this.appRef} />
    );
  }
}
*/
