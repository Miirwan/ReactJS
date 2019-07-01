import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

import avatar from "../assets/img/me.PNG";

class Infos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="mt-4 ml-4">
        <Card>
          <CardImg
            className="rounded-circle circle-image p-4"
            top
            width="100%"
            src={avatar}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>
              <h4>KOURDI Marouan</h4>
            </CardTitle>
            <CardSubtitle>
              <h6>Génie Logiciel</h6>
            </CardSubtitle>
            <CardText>
              En effet, je suis fier de ce que je deviens et de ce que je
              maîtrise. L'informatique est maintenant mon monde dont je veux
              connaitre tous les secrets.
            </CardText>
            <Button
              className="btn btn-info "
              onClick={() => {
                window.location.href = `https://www.linkedin.com/in/kourdimarouan/`;
              }}
            >
              Linkedin
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Infos;
