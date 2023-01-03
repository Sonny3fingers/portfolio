import React from "react";
import styles from "./PersonalInfo.module.css";
import Linkedin from "../icons/Linkedin";
import Github from "../icons/Github";

const PersonalInfo = () => {
  return (
    <ul className={styles.personalInfo}>
      <li>
        <span>
          <Linkedin />
        </span>
        <span>
          <Github />
        </span>
      </li>
      <li>
        name: <span>Jovisevic Milivoj</span>{" "}
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
