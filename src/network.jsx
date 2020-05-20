
import React, { Component, createRef } from "react";
  
class VisNetwork extends Component {

constructor() {
    super();
}

componentDidMount() {
    this.network = new Network(this.appRef.current, data, options);
}

render() {
    return (
    
    );
}
}
export default VisNetwork;


/*class VisNetwork extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            graph:{
                nodes: [
                    { id: 1, label: "Node 1", title: "node 1 tootip text" },
                    { id: 2, label: "Node 2", title: "node 2 tootip text" },
                    { id: 3, label: "Node 3", title: "node 3 tootip text" },
                    { id: 4, label: "Node 4", title: "node 4 tootip text" },
                    { id: 5, label: "Node 5", title: "node 5 tootip text" }
                ],
                edges: [
                    { from: 1, to: 2 },
                    { from: 1, to: 3 },
                    { from: 2, to: 4 },
                    { from: 2, to: 5 }    
                ]
            },
            options:{
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
            },
            events: {
                select: function(event) {
                    var { nodes, edges } = event;
                }
            }
        }
    }
    /*BuildGraph = async () => {
        let res = await fetch('/buildgraph?accessor=arXiv:1703.06870')
        let graph = await res.json();
        this.({ 
            nodes: graph.nodes, 
            edges: graph.edges, 
        });
        console.log(this.state);
    }

    render(){
        return(
        <Graph
        graph={this.state.graph}
        options={this.state.options}
        events={this.state.events}
        />);
    }
}

/*
    function BuildNetwork() {
        const graph = {
        nodes: [
            { id: 1, label: "Node 1", title: "node 1 tootip text" },
            { id: 2, label: "Node 2", title: "node 2 tootip text" },
            { id: 3, label: "Node 3", title: "node 3 tootip text" },
            { id: 4, label: "Node 4", title: "node 4 tootip text" },
            { id: 5, label: "Node 5", title: "node 5 tootip text" }
        ],
        edges: [
            { from: 1, to: 2 },
            { from: 1, to: 3 },
            { from: 2, to: 4 },
            { from: 2, to: 5 }
        ]
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
        };

        const events = {
        select: function(event) {
            var { nodes, edges } = event;
        }
        };
        return (
        <Graph
            graph={graph}
            options={options}
            events={events}
            getNetwork={network => {
            //  if you want access to vis.js network api you can set the state in a parent component using this property
            }}
        />
        );
    }
}*/
