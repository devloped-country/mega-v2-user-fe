import styles from './CurriculumPreview.module.css';

function CurriculumPreview({subject, time, startDate, endDate}) {

  const start = new Date(startDate);
  const end = new Date(endDate);
  const curDate = Date.now();

  return(
    <div className={styles.wrapper}>
      <div className={styles.textAlign}>
        {start - curDate < 0 && end - curDate > 0 ? (
          <img src='https://d2f3kqq80r3o3g.cloudfront.net/Frame%20303.svg' />
        ) : (
          <img src='https://d2f3kqq80r3o3g.cloudfront.net/Frame%20304.svg' />
        )}
        <h3 className={styles.title}>{subject}</h3>
        <h3 className={styles.timePosition}>{time}</h3>
      </div>
      <ul className={styles.info}>
        <li>
          {startDate} ~ {endDate}
        </li>
      </ul>
    </div>
    
  );
}

export default CurriculumPreview;