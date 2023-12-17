import QrReader from "react-qr-reader-es6";
import styles from "./QR.module.css";
import { useSQS } from "@/hooks/useSQS";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useGeoLocation } from "@/hooks/useGeoLocation";

function QR() {
  const { mutater: sqsMutate } = useSQS();
  const navigate = useNavigate();
  const { location } = useGeoLocation();

  const handleResult = async (result) => {
    if (result) {
      const [_, qr] = result.split("/");
      const { data } = await axios({
        url: "https://user.mzc-appmega.click/api/user",
        method: "post",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: {
          email: localStorage.getItem("email"),
          latitude: location.latitude,
          longitude: location.longitude,
        },
      });

      if (data) {
        navigate("/qr/location");
        return;
      }

      const res = await axios({
        url: `https://user.mzc-appmega.click/api/qr/${qr}/${localStorage.getItem("courseId")}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (res.data.responseCode === -1) {
        navigate("/qr/auth");
        return;
      }

      try {
        await sqsMutate(qr, localStorage.getItem("email"));
        navigate("/qr/success");
      } catch (e) {
        navigate("/qr/auth");
      }
    }
  };

  return (
    <section className={styles.qrWrapper}>
      <QrReader delay={1000} onScan={handleResult} className={styles.qr} style={{ width: "100%", height: "100%" }} />
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
