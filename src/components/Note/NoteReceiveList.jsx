import React, { useState, useEffect } from "react";
import NoteItem from "./NoteItem";
import NoteModal from "./NoteModal";
import styles from "./NoteList.module.css";
import { useFetch } from "@/hooks/useFetch";
import { useNewSocket } from "@/hooks/useNewSocket";

function NoteReceiveList() {
  const { receivedNotes } = useNewSocket();
  const [isShowingModal, setIsShowingModal] = useState(false);
  const [id, setId] = useState("");

  // const { data, isLoading } = useFetch([], async () => await axios("/api"));

  // if (isLoading) {
  //   return;
  // }

  // console.log(data)

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
        {receivedNotes.map((note, index) => (
          <NoteItem key={index} title={note.title} desc={note.content} date={note.date} onClick={() => handleClickList(index)} />
        ))}
        {/* <NoteItem
          title="김예진 매니저님"
          desc="안녕하세요, 훈련수당은 20일 기준 적용안녕하세요, 훈련수당은 20일 기준 적용안녕하세요, 훈련수당은 20일 기준 적용안녕하세요, 훈련수당은 20일 기준 적용안녕하세요, 훈련수당은 20일 기준 적용"
          date="2023-10-26"
          onClick={() => handleClickList(1)}
        /> */}
      </ul>
      {isShowingModal && <NoteModal handleClose={handleClose} id={id} />}
      <img
        src={`https://d2f3kqq80r3o3g.cloudfront.net/Frame 565.svg`}
        alt='메일 삭제'
        className={styles.button}
      />
    </section>
  );
}

export default NoteReceiveList;
