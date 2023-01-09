import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = () => {
  return (
    <Link to="/contact">
      <button className={styles.ctaButton}>Contact</button>
    </Link>
  );
};

export default Button;
