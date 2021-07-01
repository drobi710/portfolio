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

function About(props) {
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
              <CardText className="">Hello World!</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
