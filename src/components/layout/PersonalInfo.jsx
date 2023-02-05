import React from "react";
import styles from "./PersonalInfo.module.css";
import Linkedin from "../icons/Linkedin";
import Github from "../icons/Github";

const PersonalInfo = () => {
  return (
    <ul className={styles.personalInfo}>
      <li>
        <a href="https://www.linkedin.com/in/milivoj-jovisevic-549536153/">
          <Linkedin />
        </a>
        <a href="https://github.com/Sonny3fingers">
          <Github />
        </a>
      </li>
      <li>
        name: <span>Milivoj Jovisevic</span>
      </li>
      <li>
        country: <span>Serbia</span>
      </li>
      <li>
        city: <span>Srpska Crnja</span>
      </li>
      <li>
        address: <span>5. oktobar 65</span>
      </li>
      <li>
        phone: <span>+381644815860</span>
      </li>
    </ul>
  );
};

export default PersonalInfo;
