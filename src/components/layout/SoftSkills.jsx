import React from "react";
import styles from "./SoftSkills.module.css";

const SoftSkills = () => {
  return (
    <React.Fragment>
      <div className={styles.softSkills}>
        <ul>
          <li className={styles.one}>Enthusiastic</li>
          <li className={styles.two}>Dedicate</li>
          <li className={styles.three}>Responsible</li>
          <li className={styles.four}>Passionate</li>
          <li className={styles.five}>Curious</li>
          <li className={styles.six}>Courageous</li>
          <li className={styles.seven}>Motivated</li>
          <li className={styles.eight}>Self-organized</li>
        </ul>
      </div>
      <h2 className={styles.skillsHeader}>Skills</h2>
    </React.Fragment>
  );
};

export default SoftSkills;
