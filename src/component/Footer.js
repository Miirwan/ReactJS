import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import "../assets/style/footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="ah-footer">
        DevinWeb © {new Date().getFullYear()} All_rights_reserved
      </footer>
    );
  }
}
export default Footer;
