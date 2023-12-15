import { useState } from "react";
import styles from "./InputPassword.module.css";

function InputPassword({ title, value, setEditPassword }) {

  return (
    <div className={styles.wrapper}>
      <p>{title}</p>
      <input type="password" 
      className={styles.inputPassword}
      value={value}
      onChange={(e) => setEditPassword(e.target.value)}
      />
    </div>
  );
}

export default InputPassword;