import { useNavigate } from 'react-router-dom';
import styles from './SignUp.module.css';
import { useReducer, useState } from 'react';
import { initialSignupState, signupReducer } from '@/reducer/singupReducer';
import axios from 'axios';
import { useMutation } from '@/hooks/useMutation';

function SignUp() {
  const [signupState, dispatch] = useReducer(signupReducer, initialSignupState);
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  const { mutate } = useMutation(
    async (param) =>
      await axios({
        url: '/api/auth/identify/check',
        method: 'post',
        data: param,
      })
  );

  const { mutate: authMutate } = useMutation(
    async (param) =>
      await axios({
        url: '/api/auth/identify/certificate',
        method: 'post',
        data: param,
      }),
    {
      onSuccess: () => {
        setIsAuth(true);
      },
    }
  );

  const onClickAuthNumberSend = () => {
    const { name, phone, email, check } = signupState;

    if (!name && !phone && !email && !check) {
      return;
    }

    mutate({
      name,
      email,
      phone,
      identifyMethod: check,
    });
  };

  const onClickAuthNumber = () => {
    const { auth, email } = signupState;

    if (!auth) {
      return;
    }

    authMutate({
      id: email,
      certificationNumber: auth,
    });
  };

  const onNext = () => {
    isAuth && navigate('/signup/password');
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>회원님의 정보를 입력해주세요.</h2>
      <input
        type='text'
        placeholder='이름'
        className={styles.input}
        value={signupState.name}
        onChange={({ target }) =>
          dispatch({ type: 'INPUT', payload: 'name', value: target.value })
        }
      />
      <input
        type='text'
        placeholder='휴대폰 번호'
        className={styles.input}
        value={signupState.phone}
        onChange={({ target }) =>
          dispatch({ type: 'INPUT', payload: 'phone', value: target.value })
        }
      />
      <input
        type='text'
        placeholder='이메일'
        className={styles.input}
        value={signupState.email}
        onChange={({ target }) =>
          dispatch({ type: 'INPUT', payload: 'email', value: target.value })
        }
      />
      <div className={styles.inputWrapperContainer}>
        <div className={styles.inputWrapperWrapper}>
          <div className={styles.inputWrapper}>
            <input
              type='radio'
              value='phone'
              id='phoneNumber'
              className={styles.radio}
              name='auth'
              checked={signupState.check === 'phone'}
              onChange={({ target }) =>
                dispatch({
                  type: 'INPUT',
                  payload: 'check',
                  value: target.value,
                })
              }
            />
            <label htmlFor='phoneNumber' className={styles.label}>
              전화번호 인증
            </label>
          </div>
          <div className={styles.inputWrapper}>
            <input
              type='radio'
              value='email'
              id='email'
              className={styles.radio}
              name='auth'
              checked={signupState.check === 'email'}
              onChange={({ target }) =>
                dispatch({
                  type: 'INPUT',
                  payload: 'check',
                  value: target.value,
                })
              }
            />
            <label htmlFor='email' className={styles.label}>
              이메일 인증
            </label>
          </div>
        </div>
        <button
          type='button'
          className={styles.submit}
          onClick={onClickAuthNumberSend}
        >
          전송
        </button>
      </div>
      <div className={styles.authWrapper}>
        <input
          type='text'
          placeholder='인증번호'
          className={styles.authInput}
          value={signupState.auth}
          onChange={({ target }) =>
            dispatch({ type: 'INPUT', payload: 'auth', value: target.value })
          }
        />
        <button
          type='button'
          className={styles.auth}
          onClick={onClickAuthNumber}
        >
          인증
        </button>
      </div>
      <button type='button' className={styles.button} onClick={onNext}>
        확인
      </button>
    </section>
  );
}

export default SignUp;
