import React from "react";
import styles from "./EditHotdogForm.module.css";

export const renderFieldEdit = ({
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
    />
    {touched && error && <span className={styles.error}>{error}</span>}
  </div>
);

export const renderTextFieldEdit = ({
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
