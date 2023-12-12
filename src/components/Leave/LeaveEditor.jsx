import styles from './LeaveEditor.module.css';
import ModalButton from '@components/common/ModalButton';

function LeaveEdtior() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.title}>
        조퇴
        <img
          src={`https://d2f3kqq80r3o3g.cloudfront.net/caret-down 2.svg`}
          alt='화살표'
        />
      </div>
      <div className={styles.editor}>
        <textarea
          className={styles.textarea}
          placeholder='이유를 간단히 입력해주세요'
        />
        <div className={styles.footer}>
          <ModalButton type='mutated' onAction={() => {}} text='신청' />
        </div>
      </div>
    </section>
  );
}

export default LeaveEdtior;
