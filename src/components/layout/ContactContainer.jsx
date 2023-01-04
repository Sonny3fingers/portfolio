import React from "react";
import styles from "./ContactContainer.module.css";
import Form from "../Form";
import ContactHeader from "./ContactHeader";
import PersonalInfo from "./PersonalInfo";
import ContactFooter from "./ContactFooter";

const ContactContainer = () => {
  return (
    <div className={styles.contactContainer}>
      <Form />
      <ContactHeader />
      <PersonalInfo />
      <ContactFooter />
    </div>
  );
};

export default ContactContainer;
