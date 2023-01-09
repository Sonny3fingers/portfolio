import React, { useState, useEffect } from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <React.Fragment>
      <div className={styles.loader}>
        <div className={styles.loaderBackdrop}></div>
        <div className={styles.coin}>
          <div className={styles.coinBack}></div>
          <div className={styles.coinMiddle}></div>
          <div className={styles.coinMiddle}></div>
          <div className={styles.coinMiddle}></div>
          <div className={styles.coinMiddle}></div>
          <div className={styles.coinMiddle}></div>
          <div className={styles.coinMiddle}></div>
          <div className={styles.coinMiddle}></div>
          <div className={styles.coinMiddle}></div>
          <div className={styles.coinMiddle}></div>
          <div className={styles.coinFront}></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Loader;
