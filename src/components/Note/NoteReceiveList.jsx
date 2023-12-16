import React, { useState, useEffect } from 'react';
import NoteItem from './NoteItem';
import NoteModal from './NoteModal';
import styles from './NoteList.module.css';
import { useFetch } from '@/hooks/useFetch';
import axios from 'axios';

import { useNewSocket } from '@/hooks/useNewSocket';

function NoteReceiveList() {
  const { receivedNotes } = useNewSocket();
  const [isShowingModal, setIsShowingModal] = useState(false);
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [messages, setMessages] = useState([]);

  const { data, isLoading } = useFetch(
    [],
    async () =>
      await axios({
        url: 'https://user.mzc-appmega.click/api/note/received',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
  );

  useEffect(() => {
<<<<<<< Updated upstream
    console.log(receivedNotes + 'noteList');
=======
    console.log(receivedNotes + "noteList");
    setMessages(receivedNotes);
>>>>>>> Stashed changes
  }, [receivedNotes]);

  const handleDeleteSelectedNotes = async () => {
    try {
      const response = await axios.post(
        'https://user.mzc-appmega.click/api/note/delete_received',
        {
          noteIds: selectedNoteIds,
        }
      );

      if (response.status === 200) {
        setSelectedNoteIds([]);
      } else {
        console.error('Failed to delete notes:', response.statusText);
      }
    } catch (error) {
      console.error('Error while deleting notes:', error);
    }
  };

  const handleClickList = (id) => {
    setIsShowingModal(true);
    setId(id);
    setSelectedNoteIds((prevSelectedIds) => {
      const isSelected = prevSelectedIds.includes(id);
      return isSelected
        ? prevSelectedIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedIds, id];
    });
  };

  const handleClose = () => {
    setIsShowingModal(false);
  };

  console.log(receivedNotes, data);

  return (
    <section className={styles.wrapper}>
      <ul className={styles.noteList}>
<<<<<<< Updated upstream
        {!receivedNotes.length && !data ? (
          <div>Not received notes.</div>
        ) : (
          receivedNotes.map((note, index) => {
            return (
              <NoteItem
                key={index}
                title={note.title}
                desc={note.content}
                date={note.time}
                isRead={false}
                onClick={() => handleClickList(index)}
              />
            );
=======
        {messages ? (
          messages.map((note, index) => {
            return <NoteItem key={index} title={note.from} desc={note.title} date={new Date().toLocaleDateString()} onClick={() => handleClickList(index)} />;
>>>>>>> Stashed changes
          })
        ) : (
          <div>Not received notes.</div>
        )}
        {data &&
<<<<<<< Updated upstream
          data.data.map(({ id, title, content, time, isRead }) => {
            return (
              <NoteItem
                key={id}
                title={title}
                desc={content}
                date={time}
                isRead={isRead}
                isSelected={selectedNoteIds.includes(id)}
                onClick={() => handleClickList(id)}
              />
            );
=======
          data.data.map(({ id, title, from, content, time, isRead }) => {
            return <NoteItem key={id} title={from} desc={title} date={time} isRead={isRead} isSelected={selectedNoteIds.includes(id)} onClick={() => handleClickList(id)} />;
>>>>>>> Stashed changes
          })}
      </ul>
      {isShowingModal && <NoteModal handleClose={handleClose} id={id} />}
      <img
        src={`https://d2f3kqq80r3o3g.cloudfront.net/Frame 565.svg`}
        alt='메일 삭제'
        className={styles.button}
        onClick={handleDeleteSelectedNotes}
      />
    </section>
  );
}

export default NoteReceiveList;
