import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
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
  );
};

export default Loader;
