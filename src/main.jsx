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


//const Sidebar = React.lazy(() => import('./sidebar'));
//const VisNetwork = React.lazy(() => import('./network'));
const nodes = new DataSet([
    {
      "id": 0,
      "label": "DensePose: Dense Human Pose\nEstimation in the Wild",
      "level": 0,
      "size": 16.15549442140351,
      "title": 261,
      "url": "https://www.semanticscholar.org/paper/8c94385d45f5896e748e43171eeaaa259009faab"
    },
    {
      "id": 1,
      "label": "Microsoft COCO: Common Objects\nin Context",
      "level": 1,
      "size": 86.01744009211156,
      "title": 7399,
      "url": "https://www.semanticscholar.org/paper/71b7178df5d2b112d07e45038cb5637208659ff7"
    },
    {
      "id": 2,
      "label": "Mask R-CNN",
      "level": 1,
      "size": 47.81213235152768,
      "title": 2286,
      "url": "https://www.semanticscholar.org/paper/ea99a5535388196d0d44be5b4d7dd02029a43bb2"
    },
    {
      "id": 3,
      "label": "SMPL: a skinned multi-person\nlinear model",
      "level": 1,
      "size": 21.840329667841555,
      "title": 477,
      "url": "https://www.semanticscholar.org/paper/32d3048a4fe4becc7c4638afd05f2354b631cfca"
    },
    {
      "id": 4,
      "label": "ImageNet Classification with\nDeep Convolutional Neural\nNetworks",
      "level": 2,
      "size": 99.98499887483122,
      "title": 9997
    },
    {
      "id": 5,
      "label": "ImageNet Classification with\nDeep Convolutional Neural\nNetworks",
      "level": 2,
      "size": 99.98499887483122,
      "title": 9997
    },
    {
      "id": 6,
      "label": "ImageNet: A large-scale\nhierarchical image database",
      "level": 2,
      "size": 99.99499987499375,
      "title": 9999
    },
    {
      "id": 7,
      "label": "[Et al].",
      "level": 2,
      "size": 99.9499874937461,
      "title": 9990
    },
    {
      "id": 8,
      "label": "The Cityscapes Dataset for\nSemantic Urban Scene\nUnderstanding",
      "level": 2,
      "size": 48.79549159502341,
      "title": 2381
    },
    {
      "id": 9,
      "label": "Fully Convolutional Networks\nfor Semantic Segmentation",
      "level": 2,
      "size": 47.93745925682754,
      "title": 2298
    },
    {
      "id": 10,
      "label": "SCAPE: shape completion and\nanimation of people",
      "level": 2,
      "size": 28.337254630609507,
      "title": 803
    },
    {
      "id": 11,
      "label": "Pose space deformation: a\nunified approach to shape\ninterpolation and skeleton-\ndriven deformation",
      "level": 2,
      "size": 24.55605831561735,
      "title": 603
    },
    {
      "id": 12,
      "label": "Multi-weight enveloping:\nleast-squares approximation\ntechniques for skin animation",
      "level": 2,
      "size": 13.74772708486752,
      "title": 189
    },
    {
      "id": 13,
      "label": "The PASCAL Visual Object\nClasses Challenge",
      "level": 3,
      "size": 49.64876634922564,
      "title": 2465
    },
    {
      "id": 14,
      "label": "Principles of Categorization",
      "level": 3,
      "size": 50.0999001995014,
      "title": 2510
    },
    {
      "id": 15,
      "label": "Labeling images with a\ncomputer game",
      "level": 3,
      "size": 42.720018726587654,
      "title": 1825
    },
    {
      "id": 16,
      "label": "Faster R-CNN: Towards Real-\nTime Object Detection with\nRegion Proposal Networks",
      "level": 3,
      "size": 99.9499874937461,
      "title": 9990
    },
    {
      "id": 17,
      "label": "Fully convolutional networks\nfor semantic segmentation",
      "level": 3,
      "size": 95.60334722173695,
      "title": 9140
    },
    {
      "id": 18,
      "label": "Microsoft COCO: Common Objects\nin Context",
      "level": 3,
      "size": 84.31488599292535,
      "title": 7109
    },
    {
      "id": 19,
      "label": "Very Deep Convolutional\nNetworks for Large-Scale Image\nRecognition",
      "level": 3,
      "size": 99.9499874937461,
      "title": 9990
    },
    {
      "id": 20,
      "label": "ImageNet Classification with\nDeep Convolutional Neural\nNetworks",
      "level": 3,
      "size": 99.9699954986495,
      "title": 9994
    },
    {
      "id": 21,
      "label": "ImageNet Classification with\nDeep Convolutional Neural\nNetworks",
      "level": 3,
      "size": 99.98499887483122,
      "title": 9997
    },
    {
      "id": 22,
      "label": "Controlling Facial Expression\nand Body Move-ments in the\nComputer Generated Short `Tony\nde Peltrie",
      "level": 3,
      "size": 4.358898943540674,
      "title": 19
    }
]);

// create an array with edges
const edges = new DataSet([
  {
      "from": -1,
      "to": 0,
      "id": "3dff610a-9613-4463-bfae-8760a283b8cf"
    },
    {
      "from": 0,
      "to": 1,
      "id": "2cfb0e7e-4e28-4dea-bb88-68c61fe5a287"
    },
    {
      "from": 0,
      "to": 2,
      "id": "ce00c718-2db2-4353-86ca-78c6db4b2297"
    },
    {
      "from": 0,
      "to": 3,
      "id": "0434ee64-02e0-4ea2-a09d-912085b9b573"
    },
    {
      "from": 1,
      "to": 4,
      "id": "3c4824a5-3768-438e-aba4-fe2f0ea24604"
    },
    {
      "from": 1,
      "to": 5,
      "id": "64c075dc-c1b1-4a02-b008-8946a23b247c"
    },
    {
      "from": 1,
      "to": 6,
      "id": "3a5656ae-a910-4b3d-8eb1-75e7f6c72a04"
    },
    {
      "from": 2,
      "to": 7,
      "id": "e03c98af-cc36-41e1-9245-63b8c8f625f4"
    },
    {
      "from": 2,
      "to": 8,
      "id": "d560e411-1ff0-4223-a6bc-3ebf89bd0e88"
    },
    {
      "from": 2,
      "to": 9,
      "id": "1b309f49-819d-49a5-9538-f76082220668"
    },
    {
      "from": 3,
      "to": 10,
      "id": "8677c446-a0fe-404b-b601-ff58f8f8165d"
    },
    {
      "from": 3,
      "to": 11,
      "id": "105d27e2-d6d9-47e8-b159-2736c93b61a5"
    },
    {
      "from": 3,
      "to": 12,
      "id": "7ed7c93a-dcb6-4587-b6d0-2a96d58743bf"
    },
    {
      "from": 6,
      "to": 13,
      "id": "6e80815f-b62f-4c2f-84b3-15f68238c130"
    },
    {
      "from": 6,
      "to": 14,
      "id": "fa5a330f-ce2c-4ee3-a302-ad1842284047"
    },
    {
      "from": 6,
      "to": 15,
      "id": "770ef517-2459-46ba-8b35-1ac07113fbf3"
    },
    {
      "from": 8,
      "to": 16,
      "id": "527e198c-7544-47db-bbc3-eb43b2c0f72c"
    },
    {
      "from": 8,
      "to": 17,
      "id": "46bc34c7-f907-49b3-a66e-9f8a48b92a25"
    },
    {
      "from": 8,
      "to": 18,
      "id": "e872fd7f-c572-42c8-9a9e-9546d6dc9514"
    },
    {
      "from": 9,
      "to": 19,
      "id": "9a60a5e9-d34d-43dc-a5ce-6363630ecc63"
    },
    {
      "from": 9,
      "to": 20,
      "id": "51cbe7c1-9b94-4e33-8195-c80ab00c1ea8"
    },
    {
      "from": 9,
      "to": 21,
      "id": "89ea0752-96d0-4f5a-91ae-7bf060fe5e23"
    },
    {
      "from": 11,
      "to": 22,
      "id": "5beee9ef-ba90-4568-9c8c-dcdeaaf2f1c0"
    }
]);

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
    this.state = {
      nodeUpdate : [],
      edgeUpdate : [],
      accessor: "10.1109/CVPR.2018.00762",
      breadth: 3,
      selectednode: {}
    };
    this.network = null;
    this.appRef = createRef();    
  }

  handleChange = (e, data) => this.setState({[data.name]: data.value});
  handleMessage = (e, data) => this.setState({[data.name]: data.value});

  /*notify = () => this.toastId.current = toast('🦄 Wow so easy!', {progress: 0});
  success = () => this.toastId.current = toast.success('Success!!', {
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  })
  dismiss = () =>  toast.dismiss(this.toastId.current);

  clearall () {
    this.nodes.clear();
    this.edges.clear();
  }*/

  toggleHierarchy = () => {
    console.log(this.options)
    let hierarchy = this.options.layout.hierarchical['enabled'];
    if (hierarchy == true){
      this.options.layout.hierarchical['enabled'] = false;
      this.options.physics['enabled'] = true
      this.network.setOptions(this.options)
    }
    else {
      this.options.layout.hierarchical['enabled'] = true;
      this.options.physics['enabled'] = false
      this.network = new Network(this.appRef.current, this.data, this.options);
      this.presets()
    }
  }
  addnode = async () => {
    //temporarily build entire graph 
    await this.fetchGraph();
    if (Object.keys(this.state.nodeUpdate).length > 0){
      this.nodes.clear()
      this.edges.clear()  
      this.nodes.update(this.state.nodeUpdate);
      this.edges.update(this.state.edgeUpdate);
    }
  }

  fetchGraph = async () => {
    console.log('selectnode!', this.state.selectednode, typeof this.state.selectednode)
    if (typeof this.state.selectednode !== 'undefined'){
      console.log('shitting')
      if (Object.keys(this.state.selectednode).length > 0 ||
          this.state.selectednode.hasOwnProperty('url')){
        let accessor = this.state.selectednode['url'].split('/')
        this.state.accessor = accessor[accessor.length-1]
        console.log("accessor!", this.state.accessor)
      }
    }
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
      this.setState({nodeUpdate: graph.nodes})
      this.setState({edgeUpdate: graph.edges})
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

  presets = () => {
    this.network.on( 'click', function(properties) {
      let ids = properties.nodes;
      let clickedNodes = nodes.get(ids);
      console.log('clicked nodes:', clickedNodes);
      this.setState({selectednode: clickedNodes[0]});
    }.bind(this)) ;
  }

  componentDidMount() {
    this.network = new Network(this.appRef.current, this.data, this.options);
    this.presets();
  }

  render() {
    const wrap = (props) => {
      return (
      <div id="App">
        <Sidebar {...props} 
          addnode = {this.addnode} 
          toggleHierarchy = {this.toggleHierarchy}
        />
        <div id = "network" style = {{height:"100vh"}} ref={this.appRef}/>
        <div id = "searchbar" style = {{position: "absolute", top:"7.1vh", 
                                        left:"50%", transform: "translate(-50%,-50%)"}}> 
          <Searchbar 
            handleChange = {this.handleChange}
            handleMessage = {this.handleMessage}
            addnode = {this.addnode}
            selectednode = {this.state.selectednode}
          />
        </div>
        <Button style = {{position: "absolute", right:"-1%", top:"7.1vh", transform: "translate(-50%, -50%)"}} onClick={this.toggleHierarchy}>Chaos</Button>
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
