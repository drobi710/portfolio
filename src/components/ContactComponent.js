import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

import MyPic from "../assets/images/linkedinimg.jpg";

function Contact(props) {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="w-75 align-items-center mr-auto ml-auto p-5 m-5">
            <CardTitle className="">Danielle Robitshek</CardTitle>
            <CardImg
              className="w-50 rounded-circle"
              top
              src={MyPic}
              alt="picture of Danielle Robitshek"
            />
            <CardBody>
              <CardText className="">drobi710@gmail.com</CardText>
              <CardText className="">714-316-8371</CardText>
              <CardText className="">github.com/drobi710</CardText>
              <CardText className="">linkedin.com/in/danielle-robitshek/</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;