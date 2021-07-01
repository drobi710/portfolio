import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle
  } from "reactstrap";
  import { NavLink } from 'react-router-dom';

  import comingSoon from "../assets/images/portfolio/comingsoon.gif"

function Soon(props) {
    return (
        <div className="container">
        <div className="row">
            <div className="col">
            <Card className="align-items-center mx-auto m-5 p-3">
        {/* <CardTitle className="textTitle">Live Website</CardTitle> */}
        <CardBody>
        <CardImg className='w-75' top src={comingSoon} alt='coming soon' />
        
            <CardText className='textTitle'><NavLink className="nav-link" to="/works">
                RETURN TO MY WORKS
              </NavLink></CardText>
        </CardBody>
    </Card>
            </div>
        </div>
    </div>
    );
}

export default Soon;