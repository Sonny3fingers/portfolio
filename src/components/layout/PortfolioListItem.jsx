import React from "react";
import styles from "./PortfolioListItem.module.css";
import BookmarkImage from "../../assets/png/bookmark-small.png";
import ButtonLink from "../cta/ButtonLink";

const PortfolioListItem = () => {
  const [arrExample, setArrExample] = [
    {
      image: BookmarkImage,
      title: "Project 1 Header",
      tech: ["html", "css", "javascript"],
    },
  ];
  return (
    <li className={styles.portfolioListItem}>
      <div>
        <picture>
          <img src={BookmarkImage} alt="Bookmark-small" />
        </picture>
      </div>
      <div>
        <h3>Project Header</h3>
        <p>{arrExample.tech.map((item) => `${item} `)}</p>
        <div className={styles.buttonGroup}>
          <ButtonLink>Code</ButtonLink>
          <ButtonLink>Project</ButtonLink>
        </div>
      </div>
    </li>
  );
};

export default PortfolioListItem;
