import React from "react";
import HardSkills from "../components/layout/HardSkills";
import SoftSkills from "../components/layout/SoftSkills";
import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SoftSkills />
      <HardSkills />
    </motion.div>
  );
}

export default Skills;
