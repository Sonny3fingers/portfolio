import React from "react";
import logo from "../assets/logo.png";
import Hamburger from "./Hamburger";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Hamburger onShowMobileNavbar={props.onShowMobileNavbar} />
      <nav className={styles.nav}>
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
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
