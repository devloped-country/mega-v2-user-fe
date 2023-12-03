import styles from './QR.module.css';

function QR() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header} />
      <div className={styles.left} />
      <div className={styles.main} />
      <div className={styles.right} />
      <div className={styles.footer}>
        <strong className={styles.strong}>QR 코드를 인식해주세요.</strong>
      </div>
    </section>
  );
}

export default QR;
