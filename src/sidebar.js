import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu noOverlay>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/">
        Burgers
      </a>

      <a className="menu-item" href="/">
        Pizzas
      </a>

      <a className="menu-item" href="/">
        Desserts
      </a>
    </Menu>
  );
};
