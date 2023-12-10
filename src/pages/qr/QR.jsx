import QrReader from 'react-qr-reader-es6';
import styles from './QR.module.css';
import { useSQS } from '@/hooks/useSQS';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useGeoLocation } from '@/hooks/useGeoLocation';
import { QrScanner } from '@yudiel/react-qr-scanner';

function QR() {
  const { mutater: sqsMutate } = useSQS();
  const navigate = useNavigate();
  const { location } = useGeoLocation();

  const handleResult = async (result) => {
    if (result) {
      const [_, qr] = result.split('/');
      const { data } = await axios({
        url: '/api/user',
        method: 'post',
        data: {
          email: 'john2.doe@example.com',
          latitude: location.latitude,
          longitude: location.longitude,
        },
      });

      // if (data) {
      //   navigate('/qr/location');
      //   return;
      // }

      const res = await axios(`/api/qr/${qr}`);
      console.log(qr);
      console.log(res);
      if (res.data.responseCode === -1) {
        navigate('/qr/auth');
        return;
      }

      try {
        await sqsMutate(qr, 'john2.doe@example.com');
        navigate('/qr/success');
      } catch (e) {
        navigate('/qr/auth');
      }
    }
  };

  return (
    <section className={styles.qrWrapper}>
      {/* <QrScanner
        onDecode={handleResult}
        className={styles.qr}
        containerStyle={{ width: '100%', height: '100%' }}
      /> */}
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
