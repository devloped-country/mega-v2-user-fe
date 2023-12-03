import { DateUtil } from '@/common/DateUtil';
import styles from './LeaveCalendar.module.css';

function LeaveCalendar() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const currMonthDates = new Date(year, month + 1, 0).getDate();

  const dates = Array.from({ length: currMonthDates }, (_, i) => ({
    date: i + 1,
    day: new Date(year, month, i + 1).getDay(),
  }));

  const mapedDates = dates.map(({ date, day }) => (
    <li key={date} className={styles.date}>
      <p>{date}</p>
      <p>{DateUtil.transformDayNumberToDayText(day)}</p>
    </li>
  ));

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.month}>{month + 1}월</h3>
      <ul className={styles.dates}>{mapedDates}</ul>
    </div>
  );
}

export default LeaveCalendar;
