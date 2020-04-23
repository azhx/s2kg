//import React from 'react'
//import classNames from 'classnames'
import React, { Component, createRef } from "react";
import ReactDOM from 'react-dom'
import Sidebar from "./sidebar";
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

function App() {
  return (
    <div id="App">
      <Sidebar/>
      {/*<VisNetwork/>*/}
      <div id= "network" style = {{height:"100vh"}}></div>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#container'))
