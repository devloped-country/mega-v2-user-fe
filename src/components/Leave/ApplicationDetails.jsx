import styles from './ApplicationDetails.module.css';
import Badge from '@components/common/Badge';

function ApplicationDetails() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.title}>
        신청내역
        <img
          src={`https://d2f3kqq80r3o3g.cloudfront.net/caret-down 2.svg`}
          alt='화살표'
        />
      </div>
      <ul className={styles.detailList}>
        <li className={styles.detailItem}>
          병가
          <Badge type='blue' text='승인' />
        </li>
      </ul>
    </section>
  );
}

export default ApplicationDetails;
