import React, { Component } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Works extends Component {
  render() {
    const works = this.props.projects.map((project) => {
      return (
        <div key={project.id} className="col-11 col-md-10 m-auto">
          <Card className="mt-4">
            <CardTitle className="mt-4 textTitle">{project.name}</CardTitle>
            <hr />
            <CardBody>
              <CardImg
                className="w-75"
                id="projectPic"
                src={project.image}
                alt={project.name}
              />
              <CardText className="mt-4 px-5 textSubB">
                {project.headline}
              </CardText>
              <CardText className="textSub">{project.languages}</CardText>
              <CardText className="textContent mx-4">
                {project.description}
              </CardText>
              <ButtonGroup id="socialnav" className="my-3">
                <a href={project.git} rel="noopener noreferrer" target="_blank">
                  <Button id="gitProjBtn" className="my-4 px-4">
                    <i class="fa fa-github fa-lg px-5" />
                  </Button>
                </a>
                <a href={project.web} rel="noopener noreferrer" target="_blank">
                  <Button id="webProjBtn" className="my-4 px-4">
                    <i class="fa fa-desktop fa-lg px-5" />
                  </Button>
                </a>
              </ButtonGroup>
            </CardBody>
          </Card>
        </div>
      );
    });

    return (
      <div className="conatiner">
        <div className="row">{works}</div>
      </div>
    );
  }
}

export default Works;
