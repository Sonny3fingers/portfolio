import React from "react";
import styles from "./PortfolioList.module.css";
import PortfolioListItem from "./PortfolioListItem";
import { portfolioListData } from "../../PortfolioListData";

const PortfolioList = () => {
  return (
    <ul className={styles.portfolioList}>
      {portfolioListData.map((item) => (
        <PortfolioListItem
          key={item.id}
          image={item.image}
          title={item.title}
          languages={item.languages}
          itemBackgroundColor={item.background}
          buttonColor={item.buttonColor}
        />
      ))}
    </ul>
  );
};

export default PortfolioList;
