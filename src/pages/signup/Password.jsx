import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Password.module.css';
import { useReducer } from 'react';
import { initialSignupState, signupReducer } from '@/reducer/singupReducer';
import axios from 'axios';
import { useMutation } from '@/hooks/useMutation';

function Password() {
  const [signupState, dispatch] = useReducer(signupReducer, initialSignupState);
  const navigate = useNavigate();
  const location = useLocation();

  const { mutate } = useMutation(
    async (param) =>
      await axios({
        url: '/api/auth/reset_password',
        method: 'put',
        data: param,
      }),
    {
      onSuccess: () => {
        navigate('/login');
      },
    }
  );

  const onNext = () => {
    const { password, passwordConfirm } = signupState;

    if (!password && !passwordConfirm && password !== passwordConfirm) {
      return;
    }

    console.log(signupState);
    mutate({
      id: location.state.email,
      password,
    });
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>비밀번호를 입력해주세요</h2>
      <input
        type='password'
        placeholder='비밀번호'
        className={styles.input}
        value={signupState.password}
        onChange={({ target }) =>
          dispatch({ type: 'INPUT', payload: 'password', value: target.value })
        }
      />
      <input
        type='password'
        placeholder='비밀번호 확인'
        className={styles.input}
        value={signupState.passwordConfirm}
        onChange={({ target }) =>
          dispatch({
            type: 'INPUT',
            payload: 'passwordConfirm',
            value: target.value,
          })
        }
      />
      <button type='button' className={styles.button} onClick={onNext}>
        확인
      </button>
    </section>
  );
}

export default Password;
