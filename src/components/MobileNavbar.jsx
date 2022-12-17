import React from "react";
import { NavLink, Link } from "react-router-dom";
import Modal from "./Modal";
import Linkedin from "./icons/Linkedin";
import Github from "./icons/Github";
import styles from "./MobileNavbar.module.css";

const MobileNavbar = () => {
  return (
    <Modal>
      <nav className={styles.mobileNavbar}>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
              to="/skills"
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
              to="/portfolio"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <span>
              <Link>
                <Linkedin className={styles.icon} />
              </Link>
            </span>
            <span>
              <Link>
                <Github className={styles.icon} />
              </Link>
            </span>
          </li>
        </ul>
      </nav>
    </Modal>
  );
};

export default MobileNavbar;
