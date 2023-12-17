import React, { useState, useEffect } from "react";
import NoteItem from "./NoteItem";
import NoteModal from "./NoteModal";
import styles from "./NoteList.module.css";
import { useFetch } from "@/hooks/useFetch";
import axios from "axios";

function NoteSendList() {
  const [isShowingModal, setIsShowingModal] = useState(false);
  // const [id, setId] = useState("");
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);

  const { data, isLoading } = useFetch(
    [],
    async () =>
      await axios({
        url: "/api/note/trash",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || data.length === 0) {
    return <div>No notes.</div>;
  }

  const handleClickList = (id) => {
    setIsShowingModal(true);
    setId(id);
    setSelectedNoteIds((prevSelectedIds) => {
      const isSelected = prevSelectedIds.includes(id);
      return isSelected ? prevSelectedIds.filter((selectedId) => selectedId !== id) : [...prevSelectedIds, id];
    });
  };

  const handleClose = () => {
    setIsShowingModal(false);
  };

  return (
    <section className={styles.wrapper}>
      <ul className={styles.noteList}>
        {data.data.map(({ id, title, content, time }) => {
          return <NoteItem key={id} title={note.from} desc={note.title} date={note.time} isRead={true} isSelected={selectedNoteIds.includes(id)} onClick={() => handleClickList(note.id)} />;
        })}
        {/* <NoteItem
          title="김예진 매니저님"
          desc="안녕하세요, 훈련수당은 20일 기준 적용안녕하세요, 훈련수당은 20일 기준 적용안녕하세요, 훈련수당은 20일 기준 적용안녕하세요, 훈련수당은 20일 기준 적용안녕하세요, 훈련수당은 20일 기준 적용"
          date="2023-10-26"
          onClick={() => handleClickList(1)}
        /> */}
      </ul>
      {isShowingModal && <NoteModal handleClose={handleClose} id={id} />}
      <img src={`${import.meta.env.VITE_CLOUD_FRONT_ID}/Frame 565.svg`} alt="메일 삭제" className={styles.button} />
    </section>
  );
}

export default NoteSendList;
