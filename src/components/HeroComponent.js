import React, { Component } from "react";
import cuteGirl from "../assets/images/portfolio/backgroundWGirlCute.png";

function Hero(props) {
  return (
    <div>
      <img
        className="hero"
        src={cuteGirl}
        alt="Danielle Robitshek Fullstack Developer"
      />
    </div>
  );
}

export default Hero;
