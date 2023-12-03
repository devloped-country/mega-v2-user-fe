import styles from './AttendanceInfo.module.css';
import AttendanceInfoItem from './AttendanceInfoItem';

function AttendanceInfo() {
  return (
    <ul className={styles.infoList}>
      <AttendanceInfoItem
        img={`${
          import.meta.env.VITE_CLOUD_FRONT_ID
        }/free-icon-font-calendar-check-7602580.svg`}
        text='출석'
        value='12회'
        type='attendanced'
      />
      <AttendanceInfoItem
        img={`${
          import.meta.env.VITE_CLOUD_FRONT_ID
        }/free-icon-font-calendar-exclamation-7602584.svg`}
        text='지각ㆍ조퇴'
        value='12회'
        type='late'
      />
      <AttendanceInfoItem
        img={`${
          import.meta.env.VITE_CLOUD_FRONT_ID
        }/free-icon-font-calendar-star-9586177.svg`}
        text='결석'
        value='12회'
        type='absented'
      />
      <AttendanceInfoItem
        img={`${
          import.meta.env.VITE_CLOUD_FRONT_ID
        }/free-icon-font-calendar-xmark-9586187.svg`}
        text='공가ㆍ병가'
        value='12회'
        type='vacationed'
      />
      <AttendanceInfoItem
        img={`${
          import.meta.env.VITE_CLOUD_FRONT_ID
        }/free-icon-font-clock-five-7602640 1.svg`}
        text='금일 입실 시간'
        value='08:10'
      />
      <AttendanceInfoItem
        img={`${
          import.meta.env.VITE_CLOUD_FRONT_ID
        }/free-icon-font-clock-nine-7602655.svg`}
        text='금일 퇴실 시간'
        value='17:00'
      />
    </ul>
  );
}

export default AttendanceInfo;
