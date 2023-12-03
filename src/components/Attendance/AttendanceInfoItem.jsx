import styles from './AttendanceInfoItem.module.css';
import AttendanceBadge from './AttendanceBadge';

function AttendanceInfoItem({ img, text, type, value }) {
  return (
    <li className={styles.infoItem}>
      <div className={styles.left}>
        <img src={img} alt={text} />
        {text}
        {type && <AttendanceBadge type={type} />}
      </div>
      <p className={styles.infoText}>{value}</p>
    </li>
  );
}

export default AttendanceInfoItem;
