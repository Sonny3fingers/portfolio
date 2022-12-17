import React from "react";
import styles from "./Hamburger.module.css";

const Hamburger = (props) => {
  return (
    <button className={styles.hamburger} onClick={props.onShowMobileNavbar}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default Hamburger;
