import React from "react";
import styles from "./Hero.module.css";
import Button from "../cta/Button";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h1>Milivoj Jovisevic</h1>
        <h2>Front-End Developer</h2>
        <p>Anything is possible if you are willing to work for it.</p>
        <Button />
      </div>
    </div>
  );
};

export default Hero;
