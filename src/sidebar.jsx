import { slide as Menu } from "react-burger-menu";

class Sidebar extends React.Component{
  constructor(props) {
    super(props);
    this.addnode = this
        .addnode
        .bind(this);
    this.state = {
      nodeUpdate : [],
      edgeUpdate : [],
      accessor: "arXiv:1802.00434"
    }
  }

  addnode = async () => {
    //temporarily build entire graph 
    await this.fetchGraph();
    nodes.clear()
    edges.clear()
    nodes.update(this.state.nodeUpdate);
    edges.update(this.state.edgeUpdate);
  }

  fetchGraph = async () => {
    let res = await fetch('/buildgraph?accessor='+ this.state.accessor);
    let graph = await res.json();
    console.log(graph)
    console.log(graph.nodes)
    this.setState(prevState => ({
      nodeUpdate: graph.nodes,
      edgeUpdate: graph.edges,
      ...prevState.jasper    
      }));
  }
  

  render() {return (
        <Menu noOverlay width={500}>
          <button style ={{backgroundColor:"black"}} onClick={this.addnode}>Add</button>
        </Menu>
      );
    }
};

export default Sidebar
