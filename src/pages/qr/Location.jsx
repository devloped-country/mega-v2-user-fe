import ModalButton from '@components/common/ModalButton';
import styles from './QrResult.module.css';
import { useNavigate } from 'react-router-dom';

function Location() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <img src={`${import.meta.env.VITE_CLOUD_FRONT_ID}/25519 1.svg`} />
        <h2 className={styles.title}>위치인증 실패</h2>
        <p className={styles.desc}>강의장에서 인증해주세요.</p>
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

export default Location;
