import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";
import { useEffect, useReducer, useState } from "react";
import { initialSignupState, signupReducer } from "@/reducer/singupReducer";
import axios from "axios";
import { useMutation } from "@/hooks/useMutation";

function SignUp() {
  const [signupState, dispatch] = useReducer(signupReducer, initialSignupState);
  const [isAuth, setIsAuth] = useState(true);
  const navigate = useNavigate();
  const [isSubmitButtonActive, setIsSubmitButtonActive] = useState(true);
  const [isAuthButtonActive, setIsAuthButtonActive] = useState(true);
  const [userId, setUserId] = useState();

  const { mutate } = useMutation(
    async (param) =>
      await axios({
        url: "https://user.mzc-appmega.click/api/auth/identify/check",
        method: "post",
        data: param,
      }),
    {
      onSuccess: ({ data }) => {
        setUserId(data.data);
        setIsSubmitButtonActive(true);
        setIsAuthButtonActive(false);

        setTimeout(() => {
          setIsSubmitButtonActive(false);
          setIsAuthButtonActive(true);
        }, 60000);
      },
    }
  );

  const { mutate: authMutate } = useMutation(
    async (param) =>
      await axios({
        url: "https://user.mzc-appmega.click/api/auth/identify/certificate",
        method: "post",
        data: param,
      }),
    {
      onSuccess: () => {
        setIsAuth(false);
      },
    }
  );

  useEffect(() => {
    const { name, phone, email, check } = signupState;

    if (!name || !phone || !email || !check) {
      return;
    }

    if (!isAuthButtonActive && isSubmitButtonActive) {
      return;
    }

    setIsSubmitButtonActive(false);
  }, [signupState]);

  const onClickAuthNumberSend = () => {
    const { name, phone, email, check } = signupState;

    mutate({
      name,
      email,
      phone,
      identifyMethod: check,
    });
  };

  const onClickAuthNumber = () => {
    const { auth } = signupState;

    if (!auth) {
      return;
    }

    authMutate({
      id: userId,
      certificationNumber: auth,
    });
  };

  const onNext = () => {
    navigate("/signup/password", { state: { id: userId } });
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>회원님의 정보를 입력해주세요.</h2>
      <input type="text" placeholder="이름" className={styles.input} value={signupState.name} onChange={({ target }) => dispatch({ type: "INPUT", payload: "name", value: target.value })} />
      <input type="text" placeholder="휴대폰 번호" className={styles.input} value={signupState.phone} onChange={({ target }) => dispatch({ type: "INPUT", payload: "phone", value: target.value })} />
      <input type="text" placeholder="이메일" className={styles.input} value={signupState.email} onChange={({ target }) => dispatch({ type: "INPUT", payload: "email", value: target.value })} />
      <div className={styles.inputWrapperContainer}>
        <div className={styles.inputWrapperWrapper}>
          <div className={styles.inputWrapper}>
            <input
              type="radio"
              value="phone"
              id="phoneNumber"
              className={styles.radio}
              name="auth"
              checked={signupState.check === "phone"}
              onChange={({ target }) =>
                dispatch({
                  type: "INPUT",
                  payload: "check",
                  value: target.value,
                })
              }
            />
            <label htmlFor="phoneNumber" className={styles.label}>
              전화번호 인증
            </label>
          </div>
          <div className={styles.inputWrapper}>
            <input
              type="radio"
              value="email"
              id="email"
              className={styles.radio}
              name="auth"
              checked={signupState.check === "email"}
              onChange={({ target }) =>
                dispatch({
                  type: "INPUT",
                  payload: "check",
                  value: target.value,
                })
              }
            />
            <label htmlFor="email" className={styles.label}>
              이메일 인증
            </label>
          </div>
        </div>
        <button type="button" className={styles.submit} disabled={isSubmitButtonActive} onClick={onClickAuthNumberSend}>
          전송
        </button>
      </div>
      <div className={styles.authWrapper}>
        <input type="text" placeholder="인증번호" className={styles.authInput} value={signupState.auth} onChange={({ target }) => dispatch({ type: "INPUT", payload: "auth", value: target.value })} />
        <button type="button" className={styles.auth} onClick={onClickAuthNumber} disabled={isAuthButtonActive}>
          인증
        </button>
      </div>
      <button type="button" className={styles.button} onClick={onNext} disabled={isAuth}>
        확인
      </button>
    </section>
  );
}

export default SignUp;
