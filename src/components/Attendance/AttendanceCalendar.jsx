import styles from './AttendanceCalendar.module.css';

const getAttendanceStatusTextByStatus = (status) => {
  if (status === 0) {
    return <div className={styles.unAttendance} />;
  } else if (status === 1) {
    return <div className={styles.attendance} />;
  } else if (status === 2) {
    return <div className={styles.late} />;
  } else if (status === 3) {
    return <div className={styles.leave} />;
  }

  return <div className={styles.vacation} />;
};

function AttendanceCalendar({ sortedAttendance }) {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const currMonthDates = new Date(year, month + 1, 0).getDate();
  const currMonthNullDates = new Date(year, month, 1).getDay();
  const dates = Array.from(
    { length: currMonthNullDates + currMonthDates },
    (_, i) => {
      return { date: i + 1 - currMonthNullDates, status: 0 };
    }
  );

  sortedAttendance.forEach((attendance, index) => {
    const stringTime = String(attendance.startTime);
    const regex = /^(\d{4}-\d{2}-\d{2})/;

    const match = stringTime.match(regex);

    const extractedDate = match[1].substring(8);
    dates[parseInt(extractedDate - 1) + currMonthNullDates].status =
      attendance.status;
  });

  const mapedDates = dates.map(({ date, status }, index) => {
    return (
      <div className={styles.date} key={date}>
        {date > 0 && date}
        {date > 0 && getAttendanceStatusTextByStatus(status)}
      </div>
    );
  });

  return (
    <section>
      <h3 className={styles.month}>{month + 1}월</h3>
      <div className={styles.days}>
        <div className={styles.day}>일</div>
        <div className={styles.day}>월</div>
        <div className={styles.day}>화</div>
        <div className={styles.day}>수</div>
        <div className={styles.day}>목</div>
        <div className={styles.day}>금</div>
        <div className={styles.day}>토</div>
      </div>
      <div className={styles.dates}>{mapedDates}</div>
    </section>
  );
}

export default AttendanceCalendar;
