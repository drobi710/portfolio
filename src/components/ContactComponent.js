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
          <Card id="contactCard" className="align-items-center text-align-center mr-auto ml-auto p-3 my-4">
            <CardImg
              className="w-50"
              id="sayhey"
              top
              src={sayhey}
              alt="picture of Danielle Robitshek"
            />
            <CardBody className="w-100">
              <CardText className=""><a className="contactLink" href = "mailto: drobi710@gmail.com">Email: drobi710@gmail.com</a></CardText>
              <CardText className=""><a className="contactLink" href="tel:714-316-8371">Phone: 714-316-8371</a></CardText>
              <CardText className=""><a className="contactLink" href="https://github.com/drobi710" target="blank">GitHub: github.com/drobi710</a></CardText>
              <CardText className=""><a className="contactLink" href="https://www.linkedin.com/in/danielle-robitshek/" target="blank">LinkedIn: linkedin.com/in/danielle-robitshek/</a></CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;