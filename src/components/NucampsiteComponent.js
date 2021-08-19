import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import ImageSlider from "./ImageSliderComponent";
import { SliderData } from "./SliderData";

function Nucampsite(props) {
  return (
    <div className="col-11 col-md-10 m-auto">
      <Card className="mt-4">
        <CardTitle className="mt-4 textTitle">Nucamping</CardTitle>
        <hr />
        <CardBody>
          <ImageSlider slides={SliderData} />
          <CardText className="mt-1 px-5 textSubB">
            Reactive Native App for campground sites
          </CardText>
          <CardText className="textSub">
            Git, GitHub, Yarn, Visual Studio Code, React Native, React Native
            Elements, Redux, Modals, Form Validation, Stack Navigation, Drawer
            Navigation, Expo SDK, Gestures, Animatable, DateTimePicker, Alert
            API{" "}
          </CardText>
          <CardText className="textContent mx-4">
            A Reactive Native App for campground sites with user authentication,
            that allows users to make a profile and upload an image, search for
            campsite availability, see descriptions about different campsites,
            leave comments about the campsites they visit and pick favorites to
            save.
          </CardText>
          <ButtonGroup id="socialnav" className="my-3">
            <a
              href="https://github.com/drobi710/Nucampsite-React-Native"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button id="gitProjBtn" className="my-4 px-2">
                <i class="fa fa-github fa-lg px-5" />
              </Button>
            </a>
            <a href="/soon" rel="noopener noreferrer" target="_blank">
              <Button id="webProjBtn" className="my-4 px-2">
                <i class="fa fa-desktop fa-lg px-5" />
              </Button>
            </a>
          </ButtonGroup>
        </CardBody>
      </Card>
    </div>
  );
}

export default Nucampsite;
