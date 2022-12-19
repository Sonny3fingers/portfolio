import React, { useContext } from "react";
import styles from "./Hamburger.module.css";
import MobileNavContext from "../store/mobile-nav-context";

const Hamburger = (props) => {
  const mobileNavCtx = useContext(MobileNavContext);

  const mobileNavHandler = () => {
    mobileNavCtx.toggleMobileNav();
  };

  const activeHamburgerButton = mobileNavCtx.isShown;

  return (
    <button
      className={
        activeHamburgerButton
          ? `${styles.hamburger} ${styles.active}`
          : styles.hamburger
      }
      onClick={mobileNavHandler}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default Hamburger;
