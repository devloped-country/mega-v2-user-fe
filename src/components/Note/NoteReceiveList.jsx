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

  const { data, isLoading } = useFetch([], async () => await axios("/api/note/received"));

  const handleDeleteSelectedNotes = async () => {
    try {
      const response = await axios.post("/api/note/delete_received", {
        noteIds: selectedNoteIds,
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

  console.log(receivedNotes, data);

  return (
    <section className={styles.wrapper}>
      <ul className={styles.noteList}>
        {!receivedNotes.length && !data ? (
          <div>Not received notes.</div>
        ) : (
          receivedNotes.map((note, index) => <NoteItem key={index} title={note.title} desc={note.content} date={note.time} isRead={false} onClick={() => handleClickList(index)} />)
        )}
        {data &&
          data.map(({ id, title, content, time, isRead }) => {
            <NoteItem key={id} title={title} desc={content} date={time} isRead={isRead} isSelected={selectedNoteIds.includes(id)} onClick={() => handleClickList(id)} />;
          })}
        {/* <NoteItem
          title="김예진 매니저님"
          desc="안녕하세요, 훈련수당은 20일 기준 적용안녕하세요, 훈련수당은 20일 기준 적용안녕하세요, 훈련수당은 20일 기준 적용안녕하세요, 훈련수당은 20일 기준 적용안녕하세요, 훈련수당은 20일 기준 적용"
          date="2023-10-26"
          onClick={() => handleClickList(1)}
        /> */}
      </ul>
      {isShowingModal && <NoteModal handleClose={handleClose} id={id} />}
      <img src={`https://d2f3kqq80r3o3g.cloudfront.net/Frame 565.svg`} alt="메일 삭제" className={styles.button} onClick={handleDeleteSelectedNotes} />
    </section>
  );
}

export default NoteReceiveList;
