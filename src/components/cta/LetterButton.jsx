import React from "react";
import styles from "./LetterButton.module.css";

const LetterButton = (props) => {
  return (
    <button className={styles.letterButton} type="submit">
      {props.children}
    </button>
  );
};

export default LetterButton;
