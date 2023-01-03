import React from "react";
import Form from "../components/Form";
import ContactHeader from "../components/layout/ContactHeader";
import PersonalInfo from "../components/layout/PersonalInfo";

const Contact = () => {
  return (
    <div>
      <Form />
      <ContactHeader />
      <PersonalInfo />
    </div>
  );
};

export default Contact;
