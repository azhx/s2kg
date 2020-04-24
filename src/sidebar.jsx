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
      accessor: "arXiv:1703.06870"
    }
  }

  addnode(){
    //temporarily build entire graph 
    this.fetchGraph();
    nodes.clear()
    nodes.update(this.state.nodeUpdate);
    edges.clear()
    edges.update(this.state.edgeUpdate);
  }

  fetchGraph = async () => {
    let res = await fetch('/buildgraph?accessor='+ this.state.accessor);
    let graph = await res.json();
    console.log(graph)
    this.setState({
      nodeUpdate: graph.nodes,
      edgeUpdate: graph.edges
    });
  }


  render() {return (
        <Menu noOverlay width={500}>
          <button style ={{backgroundColor:"black"}} onClick={this.addnode}>Add</button>
        </Menu>
      );
    }
};

export default Sidebar
