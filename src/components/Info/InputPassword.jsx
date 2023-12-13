import styles from "./InputPassword.module.css";

function InputPassword({ title }) {

  return (
    <div className={styles.wrapper}>
      <p>{title}</p>
      <input type="password" className={styles.inputPassword}/>
    </div>
  );
}

export default InputPassword;