import styles from './AttendanceInfo.module.css';
import AttendanceInfoItem from './AttendanceInfoItem';

function AttendanceInfo({ attendanceInfo }) {
  return (
    <ul className={styles.infoList}>
      <AttendanceInfoItem
        img={`https://d2f3kqq80r3o3g.cloudfront.net/free-icon-font-calendar-check-7602580.svg`}
        text='출석'
        value={`${attendanceInfo.attendanceCount}회`}
        type='attendanced'
      />
      <AttendanceInfoItem
        img={`https://d2f3kqq80r3o3g.cloudfront.net/free-icon-font-calendar-exclamation-7602584.svg`}
        text='지각ㆍ조퇴'
        value={`${attendanceInfo.tardinessCount}회`}
        type='late'
      />
      <AttendanceInfoItem
        img={`https://d2f3kqq80r3o3g.cloudfront.net/free-icon-font-calendar-star-9586177.svg`}
        text='결석'
        value={`${attendanceInfo.absenceCount}회`}
        type='absented'
      />
      <AttendanceInfoItem
        img={`https://d2f3kqq80r3o3g.cloudfront.net/free-icon-font-calendar-xmark-9586187.svg`}
        text='공가ㆍ병가'
        value={`${attendanceInfo.vacationCount}회`}
        type='vacationed'
      />
    </ul>
  );
}

export default AttendanceInfo;
