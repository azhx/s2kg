import { slide as Menu } from "react-burger-menu";

class Sidebar extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    let abstract = ""
    if (typeof this.props.selectednode == 'undefined'){
      abstract = "No paper selected"
    } else {
      abstract = this.props.selectednode['abstract']
    }
    return (
        <Menu noOverlay width={"50vw"}>
          <h1>Abstract</h1>
          <p>{abstract}</p>
        </Menu>
      );
    }
};

export default Sidebar
