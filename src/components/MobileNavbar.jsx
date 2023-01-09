import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import Linkedin from "./icons/Linkedin";
import Github from "./icons/Github";
import styles from "./MobileNavbar.module.css";
import MobileNavContext from "../store/mobile-nav-context";

const MobileNavbar = () => {
  const mobileNavCtx = useContext(MobileNavContext);
  function mobileNavbarHandler() {
    mobileNavCtx.toggleMobileNav();
  }
  return (
    <Modal>
      <nav className={styles.mobileNavbar}>
        <ul>
          <li>
            <NavLink
              onClick={mobileNavbarHandler}
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={mobileNavbarHandler}
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
              to="/skills"
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={mobileNavbarHandler}
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
              to="/portfolio"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={mobileNavbarHandler}
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <span>
              <a
                onClick={mobileNavbarHandler}
                href="https://www.linkedin.com/in/milivoj-jovisevic-549536153/"
              >
                <Linkedin className={styles.icon} />
              </a>
            </span>
            <span>
              <a
                onClick={mobileNavbarHandler}
                href="https://github.com/Sonny3fingers"
              >
                <Github className={styles.icon} />
              </a>
            </span>
          </li>
        </ul>
      </nav>
    </Modal>
  );
};

export default MobileNavbar;
