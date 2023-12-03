import { useNavigate } from 'react-router-dom';
import styles from './SignUp.module.css';

function SignUp() {
  const navigate = useNavigate();

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>회원님의 정보를 입력해주세요.</h2>
      <input type='text' placeholder='이름' className={styles.input} />
      <input type='text' placeholder='휴대폰 번호' className={styles.input} />
      <input type='text' placeholder='이메일' className={styles.input} />
      <div className={styles.inputWrapperContainer}>
        <div className={styles.inputWrapper}>
          <input
            type='radio'
            value='전화번호 인증'
            id='phoneNumber'
            className={styles.radio}
            name='auth'
          />
          <label htmlFor='phoneNumber' className={styles.label}>
            전화번호 인증
          </label>
        </div>
        <div className={styles.inputWrapper}>
          <input
            type='radio'
            value='이메일 인증'
            id='email'
            className={styles.radio}
            name='auth'
          />
          <label htmlFor='email' className={styles.label}>
            이메일 인증
          </label>
        </div>
      </div>
      <div className={styles.authWrapper}>
        <input
          type='text'
          placeholder='인증번호'
          className={styles.authInput}
        />
        <button type='button' className={styles.auth}>
          인증
        </button>
      </div>
      <button
        type='button'
        className={styles.button}
        onClick={() => navigate('/signup/password')}
      >
        확인
      </button>
    </section>
  );
}

export default SignUp;
