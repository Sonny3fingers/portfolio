import React from "react";
import PortfolioHeader from "../components/layout/PortfolioHeader";
import PortfolioList from "../components/layout/PortfolioList";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PortfolioHeader />
      <PortfolioList />
    </motion.div>
  );
};

export default Portfolio;
