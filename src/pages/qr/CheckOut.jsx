import ModalButton from '@components/common/ModalButton';
import styles from './QrResult.module.css';
import { useNavigate } from 'react-router-dom';

function CheckOut() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <img src={`https://d2f3kqq80r3o3g.cloudfront.net/party_popper 1.svg`} />
        <h2 className={styles.title}>퇴실 완료</h2>
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

export default CheckOut;
