import React from "react";
import ContactContainer from "../components/layout/ContactContainer";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ContactContainer />
    </motion.div>
  );
};

export default Contact;
