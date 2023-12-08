import { useLocation } from 'react-router-dom';
import styles from './NoteEditor.module.css';
import ModalButton from '@components/common/ModalButton';
import { useSocket } from "@/hooks/useSocket";

function NoteEditor() {
  const location = useLocation();

  return (
    <div className={styles.wrapper}>
      <p className={styles.receiver}>받는사람</p>
      <input
        type='text'
        value={location.state.receiver}
        className={styles.input}
        readOnly
      />
      <p className={styles.title}>제목</p>
      <input
        type='text'
        placeholder='제목을 입력해주세요'
        className={styles.input}
      />
      <p className={styles.content}>내용</p>
      <textarea placeholder='내용을 입력해주세요' className={styles.textarea} />
      <footer className={styles.footer}>
        <ModalButton type='mutated' onAction={() => {}} text='전송' />
      </footer>
    </div>
  );
}

export default NoteEditor;
