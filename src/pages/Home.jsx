import React from "react";
import Hero from "../components/layout/Hero";
import { delay, motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, delay: 3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
    </motion.div>
  );
}

export default Home;
