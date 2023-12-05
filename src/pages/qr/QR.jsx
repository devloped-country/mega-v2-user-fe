import QrReader from 'react-qr-reader-es6';
import styles from './QR.module.css';
import { useSQS } from '@/hooks/useSQS';

function QR() {
  const { mutater: sqsMutate } = useSQS();

  const handleResult = (result) => {
    if (result) {
      const [_, qr] = result.split('/');
      sqsMutate(qr);
    }
  };

  return (
    <section className={styles.qrWrapper}>
      <QrReader
        delay={1000}
        onScan={handleResult}
        className={styles.qr}
        style={{ width: '100%', height: '100%' }}
      />
      <div className={styles.wrapper}>
        <div className={styles.header} />
        <div className={styles.left} />
        <div className={styles.main} />
        <div className={styles.right} />
        <div className={styles.footer}>
          <strong className={styles.strong}>QR 코드를 인식해주세요.</strong>
        </div>
      </div>
    </section>
  );
}

export default QR;
