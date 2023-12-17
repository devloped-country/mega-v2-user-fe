import React, { useState, useEffect } from "react";
import NoteItem from "./NoteItem";
import NoteModal from "./NoteModal";
import styles from "./NoteList.module.css";
import { useFetch } from "@/hooks/useFetch";
import axios from "axios";

import { useNewSocket } from "@/hooks/useNewSocket";

function NoteReceiveList() {
  const { receivedNotes } = useNewSocket();
  const [isShowingModal, setIsShowingModal] = useState(false);
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [id, setId] = useState();
  const [messages, setMessages] = useState([]);

  const { data, isLoading } = useFetch(
    [],
    async () =>
      await axios({
        url: "http://localhost:8082/api/note/received",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
  );

  useEffect(() => {
    console.log(receivedNotes + "noteList");
    setMessages(receivedNotes);
  }, [receivedNotes]);

  const handleDeleteSelectedNotes = async () => {
    try {
      const response = await axios({
        url: "http://localhost:8082/api/note/delete_received",
        method: "put",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: { noteIds: selectedNoteIds },
      });

      if (response.status === 200) {
        setSelectedNoteIds([]);
      } else {
        console.error("Failed to delete notes:", response.statusText);
      }
    } catch (error) {
      console.error("Error while deleting notes:", error);
    }
  };

  const handleClickList = (e, id) => {
    e.stopPropagation();
    setIsShowingModal(true);
    setId(id);
    setSelectedNoteIds((prevSelectedIds) => {
      console.log(prevSelectedIds);
      const isSelected = prevSelectedIds.includes(id);
      return isSelected ? prevSelectedIds.filter((selectedId) => selectedId !== id) : [...prevSelectedIds, id];
    });
  };

  const handleClose = () => {
    setIsShowingModal(false);
  };
  console.log(isShowingModal);
  console.log(receivedNotes, data);

  return (
    <section className={styles.wrapper}>
      <ul className={styles.noteList}>
        {messages ? (
          messages.map((note, index) => {
            return <NoteItem key={index} title={note.senderName} desc={note.title} date={new Date().toLocaleDateString()} onClick={(e) => handleClickList(e, note.id)} />;
          })
        ) : (
          <div>Not received notes.</div>
        )}
        {data &&
          data.data.map(({ id, title, from, content, time, isRead }) => {
            return (
              <NoteItem
                key={id}
                title={from}
                desc={title}
                date={time}
                isRead={isRead}
                isSelected={selectedNoteIds.includes(id)}
                onClick={(e) => handleClickList(e, id)}
                onChange={setSelectedNoteIds}
              />
            );
          })}
      </ul>
      {isShowingModal && <NoteModal handleClose={handleClose} id={id} />}
      <img src={`https://d2f3kqq80r3o3g.cloudfront.net/Frame 565.svg`} alt="메일 삭제" className={styles.button} onClick={handleDeleteSelectedNotes} onChange={setSelectedNoteIds} />
    </section>
  );
}

export default NoteReceiveList;
