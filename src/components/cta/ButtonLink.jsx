import React, { useState } from "react";
import styles from "./ButtonLink.module.css";

const ButtonLink = (props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <a href={props.linkHref} target="_blank" rel="noreferrer">
      <button
        className={styles.buttonLink}
        style={{
          outline: `3px solid ${props.buttonColor}`,
          color: isHover ? "#fff" : `${props.buttonColor}`,
          backgroundColor: isHover ? `${props.buttonColor}` : "#fff",
        }}
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        {props.children}
      </button>
    </a>
  );
};

export default ButtonLink;
