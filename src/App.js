import React from "react";
import Peoples from "./component/Peoples";
import "./App.css";
import NavBar from "./component/navBar";
import Infos from "./component/Infos";

import { Container, Row, Col } from "reactstrap";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <NavBar />

      {/* <SideBar /> */}
      <Row>
        <Col lg="3">
          <Infos />
        </Col>
        <Col lg="8">
          <Peoples />
        </Col>
      </Row>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
