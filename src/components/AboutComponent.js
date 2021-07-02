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

import mecode from "../assets/images/mecode.jpeg";
import midasTIP from "../assets/images/midasTIP.jpg";
import fiona from "../assets/images/fiona.jpg";
import pali from "../assets/images/paliJonas.jpeg";

function About(props) {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <Card
            id="aboutCard"
            className="align-items-center mx-auto p-5 m-5"
          >
            <CardImg
              className="w-50 rounded-circle"
              top
              src={mecode}
              alt="picture of Danielle Robitshek"
            />
            <CardTitle className="textTitle m-4">Danielle Robitshek</CardTitle>
            <CardBody>
              <CardText id="aboutbio" className="mb-5 overflow-auto">I'm excited to be in this new chapter of my life, to follow my passion and create amazing things with amazing people. I've spent the last year diving deep into web and app development. First, as a side hobby, falling in love, now a determined aspiring Full Stack Developer. Attending the Nucamp Bootcamp, I journeyed through the basics of web development. Learning HTML, CSS, and introductory JavaScript, creating my first JavaScript game, my passion was sparked. From there, I continued to the Full Stack program, focusing on the MERN stack, where I collaborated with outstanding individuals on group projects and also created solo projects that I am proud of. Endlessly learning and building my skills more everyday and seeing what I am producing grow into projects I am proud to show ignites my soul. With plans to continue my Backend knowledge by attending the Nucamp Python course in August and aspirations of releasing my first App, the future is full of new adventures.
              <br/><br/>
              In my spare time I train wild horses and burros and advocate for their adoption. Looking a wild animal in the eye takes fearless determination and grit. Working with an untouched animal takes intuition, promotes compassion, understanding, tireless communication and knowing when to ask for help. The accomplishment I feel when I present an adopter an animal that I have molded from a wild, untouchable, and fearful being to a domestic partner is beyond rewarding.
<br/><br/>
              Another passion of mine is animal training/casting. My current horse that I trainer, Paladin, a former wild stallion has starred in the film Chaos Walking and in the HBO Series Watchman. I enjoy board games, especially deck-building games like Dominion and computer games. I have two doggos, Pancake and Bowie.
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
                    <CardText className="">On set of Chaos Walking</CardText>
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
                    <CardText className="">Me and one of the Mustangs I trained, Fiona competing</CardText>
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
                    <CardText className="">Competing with another Mustang I trained, Midas</CardText>
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
