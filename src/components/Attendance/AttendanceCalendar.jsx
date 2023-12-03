import styles from './AttendanceCalendar.module.css';

function AttendanceCalendar() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const currMonthDates = new Date(year, month + 1, 0).getDate();
  const currMonthNullDates = new Date(year, month, 1).getDay();

  const dates = Array.from(
    { length: currMonthNullDates + currMonthDates },
    (_, i) => i + 1 - currMonthNullDates
  );

  const mapedDates = dates.map((date) => (
    <div className={styles.date} key={date}>
      {date > 0 && date}
    </div>
  ));

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
