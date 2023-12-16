import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styles from './NoteEditor.module.css';
import ModalButton from '@components/common/ModalButton';
import { useNewSocket } from '@/hooks/useNewSocket';
import { useMutation } from '@/hooks/useMutation';
import axios from 'axios';

function NoteEditor() {
  const navigate = useNavigate();
  const { doSend } = useNewSocket();
  const location = useLocation();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { mutate } = useMutation(
    async () =>
      await axios({
        url: '/api/note/register',
        method: 'post',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        data: {
          to: [location.state.receiverId],
          title: title,
          content: content,
        },
      }),
    {
      onSuccess: () => {
        navigate('/note');
      },
    }
  );

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
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <p className={styles.content}>내용</p>
      <textarea
        placeholder='내용을 입력해주세요'
        className={styles.textarea}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <footer className={styles.footer}>
        <ModalButton
          type='mutated'
          onAction={async () => {
            await doSend({
              action: 'sendToManager',
              type: 'note',
              from: parseInt(localStorage.getItem('id')),
              to: [location.state.receiverId],
              title: title,
              content: content,
            });
            await mutate({
              to: [location.state.receiverId],
              title: title,
              content: content,
            });
          }}
          text='전송'
        />
      </footer>
    </div>
  );
}

export default NoteEditor;
