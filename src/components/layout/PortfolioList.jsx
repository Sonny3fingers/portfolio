import React from "react";
import styles from "./PortfolioList.module.css";
import PortfolioListItem from "./PortfolioListItem";

const PortfolioList = () => {
  return (
    <ul className={styles.portfolioList}>
      <PortfolioListItem />
      <PortfolioListItem />
    </ul>
  );
};

export default PortfolioList;
