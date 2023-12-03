import ModalButton from '@components/common/ModalButton';
import styles from './QrResult.module.css';

function ReAuth() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <img src={`${import.meta.env.VITE_CLOUD_FRONT_ID}/reauth 1.svg`} />
        <h2 className={styles.title}>재인증 실패</h2>
        <p className={styles.desc}>재인증은 하실 수 없어요.</p>
        <ModalButton type='mutated' onAction={() => {}} text='홈으로 이동' />
      </div>
    </div>
  );
}

export default ReAuth;
