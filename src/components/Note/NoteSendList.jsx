import React, { useState, useEffect } from 'react';
import NoteItem from './NoteItem';
import NoteModal from './NoteModal';
import styles from './NoteList.module.css';
import { useFetch } from '@/hooks/useFetch';
import axios from 'axios';

function NoteSendList() {
  const [isShowingModal, setIsShowingModal] = useState(false);
  // const [id, setId] = useState("");

  const { data, isLoading } = useFetch(
    [],
    async () =>
      await axios({
        url: '/api/note/sent',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || data.length === 0) {
    return <div>No sent notes.</div>;
  }

  const handleClickList = (id) => {
    setIsShowingModal(true);
    setId(id);
  };

  const handleClose = () => {
    setIsShowingModal(false);
  };

  return (
    <section className={styles.wrapper}>
      <ul className={styles.noteList}>
        {data.data.map(({ id, title, content, time }) => {
          return (
            <NoteItem
              key={id}
              title={title}
              desc={content}
              date={time}
              isRead={true}
              onClick={() => handleClickList(id)}
            />
          );
        })}
      </ul>
      {isShowingModal && <NoteModal handleClose={handleClose} id={id} />}
      <img
        src={`${import.meta.env.VITE_CLOUD_FRONT_ID}/Frame 565.svg`}
        alt='메일 삭제'
        className={styles.button}
      />
    </section>
  );
}

export default NoteSendList;
