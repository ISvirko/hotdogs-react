import React from "react";
import styles from "./AddHotdogForm.module.css";

export const renderFieldAdd = ({
  input,
  type,
  placeholder,
  meta: { touched, error },
}) => (
  <div className={styles.inputRow}>
    <input
      {...input}
      type={type}
      placeholder={placeholder}
      className={styles.input}
      autoComplete="off"
    />
    {touched && error && <span className={styles.error}>{error}</span>}
  </div>
);

export const renderTextFieldAdd = ({
  input,
  type,
  placeholder,
  meta: { touched, error },
}) => (
  <div className={styles.inputRow}>
    <textarea
      {...input}
      type={type}
      placeholder={placeholder}
      className={styles.textarea}
      rows={5}
    />
    {touched && error && <span className={styles.error}>{error}</span>}
  </div>
);
