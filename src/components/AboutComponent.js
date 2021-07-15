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

import mepic from "../assets/images/linkedinimg.jpg";
import midasTIP from "../assets/images/midasTIP.jpg";
import fiona from "../assets/images/fiona.jpg";
import pali from "../assets/images/paliJonas.jpeg";

function About(props) {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <Card id="aboutCard" className="align-items-center mx-auto p-3 m-3">
            <CardImg
              className="w-50 rounded-circle"
              top
              src={mepic}
              alt="picture of Danielle Robitshek"
            />
            <CardTitle className="textTitle mb-0 mt-3">
              Danielle Robitshek
            </CardTitle>
            <CardBody>
              <CardText id="aboutbio" className="mb-3 overflow-auto">
                I am excited to be in this new chapter of my life, to follow my
                passion and create amazing things with amazing people. I have
                spent the last year diving deep into web and app development.
                First, as a side hobby, falling in love, now a determined Full
                Stack Developer. I have honed my ability to work through a
                problem with determination, come up with a solution and
                develiver results.
                <br />
                <br />
                I recently graduated with honors from Nucamp Coding Bootcamp. I
                have completed certifications for: Web Development Fundamentals
                - HTML, CSS, and JavaScript; Front End Development - Bootstrap,
                React, and React Native; and Full Stack Development - Node.js,
                MongoDB, and Express. I am looking for new opportunities to be
                part of a team that supports learning and is energized about the
                latest technologies.
                <br />
                <br />
                In my spare time I train wild horses and burros and advocate for
                their adoption. Looking a wild animal in the eye takes fearless
                determination and grit. Working with an untouched animal takes
                intuition, promotes compassion, understanding, tireless
                communication and knowing when to ask for help. The
                accomplishment I feel when I present an adopter an animal that I
                have molded from a wild, untouchable, and fearful being to a
                domestic partner is beyond rewarding.
                <br />
                <br />
                Fun fact! My current mustang Paladin, a former wild stallion has
                starred in the film Chaos Walking and in the HBO Series
                Watchman.
              </CardText>
            </CardBody>
            <Row className="justify-content-center">
              {" "}
              <Col className="col col-md-8">
                <Card className="align-items-center mx-auto m-3 p-3 ">
                  <CardImg
                    className=""
                    top
                    src={pali}
                    alt="picture of Danielle Robitshek and Nick Jonas on set "
                  />
                  <CardBody>
                    <CardText className="">
                      On the set of Chaos Walking with Paladin
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col className="mx-auto col col-md-6">
                <Card className="align-items-center mx-auto m-3 p-3 ">
                  <CardImg
                    className=""
                    top
                    src={fiona}
                    alt="picture of Danielle Robitshek jumping a horse"
                  />
                  <CardBody>
                    <CardText className="">Me and Fiona competing</CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col className="col col-md-6">
                <Card className="align-items-center mx-auto m-3 p-3 ">
                  <CardImg
                    className=""
                    top
                    src={midasTIP}
                    alt="picture of Danielle Robitshek at a horse show"
                  />
                  <CardBody>
                    <CardText className="">Midas the Golden Mustang</CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
