import { useNavigate } from 'react-router-dom';
import styles from './Password.module.css';

function Password() {
  const navigate = useNavigate();

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>비밀번호를 입력해주세요</h2>
      <input type='password' placeholder='비밀번호' className={styles.input} />
      <input
        type='password'
        placeholder='비밀번호 확인'
        className={styles.input}
      />
      <button
        type='button'
        className={styles.button}
        onClick={() => navigate('/login')}
      >
        확인
      </button>
    </section>
  );
}

export default Password;
