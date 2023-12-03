import styles from './AttendanceBadge.module.css';

// eslint-disable-next-line react/prop-types
function AttendanceBadge({ type }) {
  if (type === 'attendanced') {
    return <div className={styles.attendance} />;
  } else if (type === 'late') {
    return <div className={styles.late} />;
  } else if (type === 'absented') {
    return <div className={styles.absent} />;
  }

  return <div className={styles.vacation} />;
}

export default AttendanceBadge;
