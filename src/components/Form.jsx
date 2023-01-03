import React, { useState } from "react";
import styles from "./Form.module.css";
import LetterButton from "./cta/LetterButton";

const Form = () => {
  const [isActiveInputName, setIsActiveInputName] = useState(false);
  const [isActiveInputEmail, setIsActiveInputEmail] = useState(false);
  const [isActiveInputMessage, setIsActiveInputMessage] = useState(false);
  const inputNameHandler = () => {
    setIsActiveInputName(true);
    setIsActiveInputEmail(false);
    setIsActiveInputMessage(false);
  };
  const inputEmailHandler = () => {
    setIsActiveInputEmail(true);
    setIsActiveInputName(false);
    setIsActiveInputMessage(false);
  };
  const inputMessageHandler = () => {
    setIsActiveInputMessage(true);
    setIsActiveInputEmail(false);
  };
  const submitHandler = () => {
    setIsActiveInputName(false);
    setIsActiveInputEmail(false);
    setIsActiveInputMessage(false);
  };
  return (
    <form
      className={styles.form}
      action="https://formsubmit.co/jomivili23@gmail.com"
      method="POST"
      autoComplete="off"
    >
      <div
        className={
          isActiveInputName
            ? `${styles.formControl} ${styles.isActive}`
            : `${styles.formControl}`
        }
      >
        <input
          type="text"
          name="name"
          onClick={inputNameHandler}
          placeholder="Name"
          required
        />
        <label htmlFor="name" className={styles.labelName}></label>
      </div>
      <div
        className={
          isActiveInputEmail
            ? `${styles.formControl} ${styles.isActive}`
            : `${styles.formControl}`
        }
      >
        <input
          type="email"
          name="email"
          onClick={inputEmailHandler}
          placeholder="Email"
          required
        />
        <label htmlFor="email" className={styles.labelEmail}></label>
      </div>
      <div
        className={
          isActiveInputMessage
            ? `${styles.formControl} ${styles.isActive}`
            : `${styles.formControl}`
        }
      >
        <input
          type="text"
          name="message"
          onClick={inputMessageHandler}
          placeholder="Message"
          required
        />
        <label htmlFor="message" className={styles.labelMessage}></label>
      </div>
      <LetterButton onClick={submitHandler}>
        <span>S</span>
        <span>u</span>
        <span>b</span>
        <span>m</span>
        <span>i</span>
        <span>t</span>
      </LetterButton>
    </form>
  );
};

export default Form;
