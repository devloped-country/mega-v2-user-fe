import { useState } from 'react';
import styles from './ApplicationDetails.module.css';
import Badge from '@components/common/Badge';

const getVacationByStatus = (status) => {
  if (status === 3) {
    return '병가';
  } else if (status === 4) {
    return '공가';
  }
};

const getBadgeTypeByStatusChangeAllow = (type) => {
  if (type === 0) {
    return 'green';
  } else if (type === 1) {
    return 'blue';
  } else if (type === 2) {
    return 'orange';
  }
};

const getBadgeTextByStatusChangeAllow = (text) => {
  if (text === 0) {
    return '대기중';
  } else if (text === 1) {
    return '승인';
  } else if (text === 2) {
    return '미승인';
  }
};

function ApplicationDetails({ currentDate, data }) {
  const mapedData = data.data
    .map(({ status, attendance, statusChangeAllow, time }) => {
      const stringTime = String(time);
      const regex = /^(\d{4}-\d{2}-\d{2})/;

      const match = stringTime.match(regex);

      const extractedDate = match[1].substring(8);
      if (parseInt(extractedDate) === currentDate) {
        return { status, attendance, statusChangeAllow };
      }

      return null;
    })
    .filter((data) => !!data);

  const mapedMapedData = mapedData
    .filter(({ status }) => status === 3 || status === 4)
    .map(({ status, attendance, statusChangeAllow }) => {
      return (
        <li key={attendance} className={styles.detailItem}>
          {getVacationByStatus(status)}
          <Badge
            type={getBadgeTypeByStatusChangeAllow(statusChangeAllow)}
            text={getBadgeTextByStatusChangeAllow(statusChangeAllow)}
          />
        </li>
      );
    });

  return (
    <section className={styles.wrapper}>
      <div className={styles.title}>
        신청내역
        <img
          src={`https://d2f3kqq80r3o3g.cloudfront.net/caret-down 2.svg`}
          alt='화살표'
        />
      </div>
      <ul className={styles.detailList}>{mapedMapedData}</ul>
    </section>
  );
}

export default ApplicationDetails;
