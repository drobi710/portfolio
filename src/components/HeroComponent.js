import React from "react";

import styles from "./HeroComponent.module.css";
import globalStyles from "../assets/global-styles/bootstrap.min.module.css";
import cx from "classnames";

import girl from "../assets/images/cutegirllarge.png";
import textSM from "../assets/images/mobiletexthero.png";
import textLG from "../assets/images/textLG.png";

function Hero(props) {
  return (
    <>
      <img
        src={textLG}
        alt="Hi I'm Danielle Robitshek, Full Stack Developer"
        id={styles.textLG}
        className={cx(
          globalStyles["w-75"],
          globalStyles["mr-auto"],
          globalStyles["ml-auto"],
          globalStyles["pt-5"]
        )}
      />
      <img
        src={textSM}
        alt="Hi I'm Danielle Robitshek, Full Stack Developer"
        id={styles.textSM}
        className={cx(
          globalStyles["w-75"],
          globalStyles["mr-auto"],
          globalStyles["ml-auto"],
          globalStyles["pt-5"]
        )}
      />
      <img
        src={girl}
        alt="sketch of a girl"
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
