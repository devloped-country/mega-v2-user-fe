import ModalButton from '@components/common/ModalButton';
import styles from './QrResult.module.css';

function CheckIn() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <img
          src={`${import.meta.env.VITE_CLOUD_FRONT_ID}/party_popper 1.svg`}
        />
        <h2 className={styles.title}>입실 완료</h2>
        <ModalButton type='mutated' onAction={() => {}} text='홈으로 이동' />
      </div>
    </div>
  );
}

export default CheckIn;
