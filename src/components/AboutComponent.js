import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle
  } from "reactstrap";

  import MyPic from "../assets/images/portfolio/linkedinimg.jpg"

function About(props) {
    return (
        <Card className="w-75 align-items-center mr-auto ml-auto p-5 m-5">
        <CardTitle className="">Danielle Robitshek</CardTitle>
        <CardImg className='w-50' top src={MyPic} alt='picture of Danielle Robitshek' />
        <CardBody>
            <CardText className=''>Hello World!</CardText>
        </CardBody>
    </Card>
    );
}

export default About;