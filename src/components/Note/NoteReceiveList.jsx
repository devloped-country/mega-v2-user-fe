import React, { useState, useEffect } from "react";
import NoteItem from "./NoteItem";
import NoteModal from "./NoteModal";
import styles from "./NoteList.module.css";
import { useSocket } from "@/hooks/useSocket";

function NoteReceiveList() {
  const { receivedNotes } = useSocket();
  const [isShowingModal, setIsShowingModal] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    console.log(receivedNotes);
  }, [receivedNotes]);

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
        {/* <NoteItem
          title="김예진 매니저님"
          desc="안녕하세요, 훈련수당은 20일 기준 적용안녕하세요, 훈련수당은 20일 기준 적용안녕하세요, 훈련수당은 20일 기준 적용안녕하세요, 훈련수당은 20일 기준 적용안녕하세요, 훈련수당은 20일 기준 적용"
          date="2023-10-26"
          onClick={() => handleClickList(1)}
        /> */}
        {receivedNotes.map((note, index) => (
          <NoteItem key={index} title={note.title} desc={note.content} date={note.date} onClick={() => handleClickList(index)} />
        ))}
      </ul>
      {isShowingModal && <NoteModal handleClose={handleClose} id={id} />}
      <img src={`${import.meta.env.VITE_CLOUD_FRONT_ID}/Frame 565.svg`} alt="메일 삭제" className={styles.button} />
    </section>
  );
}

export default NoteReceiveList;
