import React from "react";
import styles from "./ButtonLink.module.css";

const ButtonLink = (props) => {
  return <button className={styles.buttonLink}>{props.children}</button>;
};

export default ButtonLink;
