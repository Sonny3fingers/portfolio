import React from "react";
import styles from "./PortfolioListItem.module.css";
import ButtonLink from "../cta/ButtonLink";

const PortfolioListItem = ({
  image,
  title,
  languages,
  itemBackgroundColor,
  buttonColor,
  codeHref,
  projectHref,
}) => {
  return (
    <li
      className={styles.portfolioListItem}
      style={{ backgroundColor: `${itemBackgroundColor}` }}
    >
      <div>
        <picture>
          <img src={image} alt="item" style={{ width: `100%` }} />
        </picture>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{[languages.map((item) => `${item}, `)]}</p>
        <div className={styles.buttonGroup}>
          <ButtonLink buttonColor={buttonColor} linkHref={codeHref}>
            Code
          </ButtonLink>
          <ButtonLink buttonColor={buttonColor} linkHref={projectHref}>
            Project
          </ButtonLink>
        </div>
      </div>
    </li>
  );
};

export default PortfolioListItem;
