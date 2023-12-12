import ModalButton from '@components/common/ModalButton';
import styles from './QrResult.module.css';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <img
          src={`https://d2f3kqq80r3o3g.cloudfront.net/2900732_25520 1.svg`}
        />
        <h2 className={styles.title}>인증 실패</h2>
        <p className={styles.desc}>올바른 QR 코드를 찍어주세요.</p>
        <ModalButton
          type='mutated'
          onAction={() => {
            navigate('/');
          }}
          text='홈으로 이동'
        />
      </div>
    </div>
  );
}

export default Auth;
