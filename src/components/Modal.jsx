import React, { useContext } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import MobileNavContext from "../store/mobile-nav-context";

const Backdrop = () => {
  const mobileNavCtx = useContext(MobileNavContext);
  let showMobileNav = mobileNavCtx.isShown;
  return (
    <div
      className={
        showMobileNav
          ? `${styles.backdrop} ${styles.activeBackdrop}`
          : `${styles.backdrop} ${styles.inactiveBackdrop}`
      }
    ></div>
  );
};

const ModalOverlay = (props) => {
  const mobileNavCtx = useContext(MobileNavContext);
  let showMobileNav = mobileNavCtx.isShown;

  return (
    <div
      className={
        showMobileNav
          ? `${styles.modal} ${styles.activeModal}`
          : `${styles.modal} ${styles.inactiveModal}`
      }
    >
      {props.children}
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("overlays"))}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </React.Fragment>
  );
};

export default Modal;
