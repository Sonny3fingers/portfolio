import React from "react";
import styles from "./ButtonLink.module.css";

const ButtonLink = (props) => {
  return (
    <button
      className={styles.buttonLink}
      style={{
        outline: `2px solid ${props.buttonColor}`,
        color: `${props.buttonColor}`,
      }}
    >
      {props.children}
    </button>
  );
};

export default ButtonLink;
