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
                <Button id="gitProjBtn" href={project.git} target="blank">
                  <i class="fa fa-github fa-lg px-5" />
                </Button>
                <Button id="webProjBtn" href={project.web} target="blank">
                  <i class="fa fa-desktop fa-lg px-5" />
                </Button>
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
