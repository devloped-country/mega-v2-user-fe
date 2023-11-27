import { useState } from 'react';
import styles from './Login.module.css';

function Login() {
  const [isFocusEmailInput, setIsFocusEmailInput] = useState(false);
  const [isFocusPasswordInput, setIsFocusPasswordInput] = useState(false);
  const [isShowingValidateMessage, setIsShowingValidateMessage] =
    useState(true);

  return (
    <section className={styles.wrapper}>
      <main className={styles.main}>
        <h2 className={styles.slogan}>새로운 LMS의 시작, Mega</h2>
        <h4 className={styles.subSlogan}>
          당신은 미래의 학습을 이끄는 주인공입니다.
        </h4>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div
            className={`${styles.inputWrapper} ${
              isFocusEmailInput && styles.inputTitleActive
            }`}
          >
            <h4 className={styles.inputTitle}>이메일</h4>
            <input
              type='text'
              className={styles.input}
              onFocus={() => setIsFocusEmailInput(true)}
              onBlur={() => setIsFocusEmailInput(false)}
            />
          </div>
          <div
            className={`${styles.inputWrapper} ${
              isFocusPasswordInput && styles.inputTitleActive
            }`}
          >
            <h4 className={styles.inputTitle}>비밀번호</h4>
            <input
              type='password'
              className={styles.input}
              onFocus={() => setIsFocusPasswordInput(true)}
              onBlur={() => setIsFocusPasswordInput(false)}
            />
          </div>
          {isShowingValidateMessage && (
            <span className={styles.validateMessage}>
              이메일 또는 비밀번호가 틀렸어요
            </span>
          )}
          <button className={styles.login} type='submit'>
            로그인
          </button>
        </form>
        <div className={styles.password}>비밀번호를 잊으셨나요?</div>
      </main>
    </section>
  );
}

export default Login;
