import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import styles from "./HeroComponent.module.css";
import globalStyles from "../assets/global-styles/bootstrap.min.module.css";
import cx from "classnames";

import girl from "../assets/images/portfolio/cutegirllarge.png";
import homeSM from "../assets/images/portfolio/mobileviewHP.png";
import textSM from "../assets/images/portfolio/mobiletexthero.png";
import textLG from "../assets/images/portfolio/textLG.png"

function Hero(props) {
  return (
    <>
    <img src={textLG} 
    id={styles.textLG}
    className={cx(
      globalStyles["w-75"],globalStyles["mr-auto"],
          globalStyles["ml-auto"],
          globalStyles["pt-5"]
        )}
      />
    <img src={textSM} 
    id={styles.textSM}
    className={cx(
          globalStyles["mr-auto"],
          globalStyles["ml-auto"],
          globalStyles["pt-5"]
        )}
      />
      <img
        src={girl}
        id={styles.girl}
        className={cx(
          globalStyles["fixed-bottom"],
          globalStyles["mr-auto"],
          globalStyles["ml-auto"]
        )}
      />
    </>
  );
}

export default Hero;
