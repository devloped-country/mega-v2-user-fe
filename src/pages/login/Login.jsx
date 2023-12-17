import { useState } from "react";
import styles from "./Login.module.css";
import { useMutation } from "@/hooks/useMutation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isFocusEmailInput, setIsFocusEmailInput] = useState(false);
  const [isFocusPasswordInput, setIsFocusPasswordInput] = useState(false);
  const [isShowingValidateMessage, setIsShowingValidateMessage] = useState(true);
  const [authInfo, setAuthInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { mutate } = useMutation(
    async (param) =>
      await axios({
        url: "https://user.mzc-appmega.click/api/auth/login",
        method: "post",
        data: param,
      }),
    {
      onSuccess: (data) => {
        if (data.data.token) {
          localStorage.setItem("courseId", data.data.courseId);
          localStorage.setItem("id", data.data.id);
          localStorage.setItem("email", data.data.email);
          localStorage.setItem("token", data.data.token);
          navigate("/", { state: { email: authInfo.email } });
        } else {
          navigate("/signup/auth");
        }
      },
      onerror: () => {
        setIsShowingValidateMessage(true);
      },
    }
  );

  const onClickLogin = () => {
    mutate({
      email: authInfo.email,
      password: authInfo.password,
    });
  };

  return (
    <section className={styles.wrapper}>
      <main className={styles.main}>
        <h2 className={styles.slogan}>새로운 출결관리의 시작, Mega</h2>
        <h4 className={styles.subSlogan}>당신은 미래의 학습을 이끄는 주인공입니다.</h4>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={`${styles.inputWrapper} ${isFocusEmailInput && styles.inputTitleActive}`}>
            <h4 className={styles.inputTitle}>이메일</h4>
            <input
              type="text"
              className={styles.input}
              value={authInfo.email}
              onChange={({ target }) => setAuthInfo((prev) => ({ ...prev, email: target.value }))}
              onFocus={() => setIsFocusEmailInput(true)}
              onBlur={() => setIsFocusEmailInput(false)}
            />
          </div>
          <div className={`${styles.inputWrapper} ${isFocusPasswordInput && styles.inputTitleActive}`}>
            <h4 className={styles.inputTitle}>비밀번호</h4>
            <input
              type="password"
              className={styles.input}
              value={authInfo.password}
              onChange={({ target }) => setAuthInfo((prev) => ({ ...prev, password: target.value }))}
              onFocus={() => setIsFocusPasswordInput(true)}
              onBlur={() => setIsFocusPasswordInput(false)}
            />
          </div>
          {isShowingValidateMessage && <span className={styles.validateMessage}>이메일 또는 비밀번호가 틀렸어요</span>}
          <button className={styles.login} type="submit" onClick={onClickLogin}>
            로그인
          </button>
        </form>
        <div className={styles.password}>비밀번호를 잊으셨나요?</div>
      </main>
    </section>
  );
}

export default Login;
