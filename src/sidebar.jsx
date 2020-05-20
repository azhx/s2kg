import { slide as Menu } from "react-burger-menu";

class Sidebar extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {return (
        <Menu noOverlay width={"50vw"}>
          <p>Hello</p>
        </Menu>
      );
    }
};

export default Sidebar
