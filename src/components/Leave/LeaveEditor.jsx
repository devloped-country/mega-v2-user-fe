import { useState } from 'react';
import styles from './LeaveEditor.module.css';
import ModalButton from '@components/common/ModalButton';
import { useMutation } from '@/hooks/useMutation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LeaveEdtior({ currentDate }) {
  const navigate = useNavigate();
  const [reason, setReason] = useState('');
  const date =
    String(currentDate).length === 1
      ? '0' + String(currentDate)
      : String(currentDate);
  const year = new Date().getFullYear();
  const month =
    String(new Date().getMonth() + 1).length === 1
      ? '0' + String(new Date().getMonth() + 1)
      : String(new Date().getMonth() + 1);

  const vacationDate = `${year}-${month}-${date}`;

  const { mutate } = useMutation(
    async (params) =>
      await axios({
        url: '/api/attendance/appliance',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        method: 'post',
        data: params,
      }),
    {
      onSuccess: () => {
        navigate('/');
      },
    }
  );

  return (
    <section className={styles.wrapper}>
      <div className={styles.title}>
        공가
        <img
          src={`https://d2f3kqq80r3o3g.cloudfront.net/caret-down 2.svg`}
          alt='화살표'
        />
      </div>
      <div className={styles.editor}>
        <textarea
          className={styles.textarea}
          placeholder='이유를 간단히 입력해주세요'
          onChange={({ target }) => setReason(target.value)}
        />
        <div className={styles.footer}>
          <ModalButton
            type='mutated'
            onAction={() => {
              mutate({
                reason,
                applianceDate: vacationDate,
                status: 4,
              });
            }}
            text='신청'
          />
        </div>
      </div>
    </section>
  );
}

export default LeaveEdtior;
