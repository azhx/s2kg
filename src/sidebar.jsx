import { slide as Menu } from "react-burger-menu";

class Sidebar extends React.Component{
  constructor(props) {
    super(props);
    this.addnode = this
        .addnode
        .bind(this);
  }

  addnode(){
    nodes.update([{id:'6', label: 'wefawef', title:'qwewqe'}]);
    edges.update([{from:'6',to:'1'}]);
  }

  render() {return (
        <Menu noOverlay width={500}>
          <a className="menu-item" href="/">
            Home
          </a>
          <button onClick={this.addnode}>Add</button>
          <a className="menu-item" href="/">
            Burgers
          </a>

          <a className="menu-item" href="/">
            Pizzas
          </a>

          <a className="menu-item" href="/">
            Desserts
          </a>
          <a onClick={ this.showSettings } className="menu-item--small" >Settings</a>

        </Menu>
      );
    }
};

export default Sidebar
