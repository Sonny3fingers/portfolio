import React, { useState } from "react";
import styles from "./HardSkills.module.css";
import DoughnutChart from "../DoughnutChart";

const HardSkills = () => {
  return (
    <div className={styles.hardSkills}>
      <DoughnutChart />
    </div>
  );
};

export default HardSkills;
