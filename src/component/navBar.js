import React, { Component } from "react";

import logo from "../assets/img/logo-b.png";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a
            className="navbar-brand"
            href="http://devinweb.com/"
            target="_blank"
          >
            <img
              src={logo}
              width="200px"
              height="69"
              className="d-inline-block align-top"
              alt=""
            />
          </a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
