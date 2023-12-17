import React, { useState, useEffect } from "react";
import NoteItem from "./NoteItem";
import NoteModal from "./NoteModal";
import styles from "./NoteList.module.css";
import { useFetch } from "@/hooks/useFetch";
import axios from "axios";

function NoteSendList() {
  const [isShowingModal, setIsShowingModal] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  const { data, isLoading } = useFetch(
    [],
    async () =>
      await axios({
        url: "/api/note/sent",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
  );

  if (isLoading) {
    return;
  }

  if (!data || data.length === 0) {
    return <div>No sent notes.</div>;
  }

  const handleClickList = (id) => {
    setIsShowingModal(true);
    setId(id);
    setSelectedIds((prevSelectedIds) => [...prevSelectedIds, id]);
  };

  const handleClose = () => {
    setIsShowingModal(false);
  };

  const handleDeleteSelected = async () => {
    try {
      // API로 선택한 노트의 ID 배열 전송
      await axios({
        url: "/api/note/real_delete_sent",
        method: "put",
        data: { ids: selectedIds },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      // 여기서 선택 상태 초기화나 다른 필요한 작업 수행
    } catch (error) {
      console.error("Error deleting notes:", error);
    }
  };

  return (
    <section className={styles.wrapper}>
      <ul className={styles.noteList}>
        {data.data.map(({ id, title, content, time }) => {
          return <NoteItem key={id} title={note.from} desc={note.title} date={note.time} isRead={true} onClick={() => handleClickList(note.id)} />;
        })}
      </ul>
      {isShowingModal && <NoteModal handleClose={handleClose} id={id} />}
      <img src={`${import.meta.env.VITE_CLOUD_FRONT_ID}/Frame 565.svg`} alt="메일 삭제" className={styles.button} />
    </section>
  );
}

export default NoteSendList;
