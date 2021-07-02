import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
} from "reactstrap";

import sayhey from "../assets/images/sayhey.gif";

function Contact(props) {
  return (
    <Container>
      <Row>
        <Col>
          <Card id="contactCard" className="w-75 align-items-center mr-auto ml-auto p-5 m-5">
            <CardImg
              className="w-50"
              top
              src={sayhey}
              alt="picture of Danielle Robitshek"
            />
            <CardBody>
              <CardText className=""><a className="contactLink" href = "mailto: drobi710@gmail.com">drobi710@gmail.com</a></CardText>
              <CardText className=""><a className="contactLink" href="tel:714-316-8371">714-316-8371</a></CardText>
              <CardText className=""><a className="contactLink" href="https://github.com/drobi710" target="blank">My GitHub</a></CardText>
              <CardText className=""><a className="contactLink" href="https://www.linkedin.com/in/danielle-robitshek/" target="blank">My LinkedIn</a></CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;