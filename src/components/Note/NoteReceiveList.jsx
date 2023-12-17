import React, { useState, useEffect } from "react";
import NoteItem from "./NoteItem";
import styles from "./NoteList.module.css";
import { useFetch } from "@/hooks/useFetch";
import { useMutation } from "@/hooks/useMutation";
import axios from "axios";
import { useNewSocket } from "@/hooks/useNewSocket";
import ContentLoading from "@components/common/ContentLoading";

function NoteReceiveList() {
  const { receivedNotes } = useNewSocket();
  const [messages, setMessages] = useState([]);

  const { isLoading, refetch } = useFetch(
    [],
    async () =>
      await axios({
        url: "/api/note/received",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    {
      onSuccess: ({ data }) => {
        const mapedData = data.map((data) => ({ ...data, isSelect: false }));
        setMessages([...mapedData]);
      },
    }
  );

  const { mutate } = useMutation(
    async (params) =>
      await axios({
        url: "/api/note/delete_received",
        method: "put",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: params,
      }),
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  useEffect(() => {
    const mapedReceiveNotes = receivedNotes.map((receivedNote) => ({ isSelected: false, note: receivedNote, ...receivedNote }));
    setMessages(mapedReceiveNotes);
  }, [receivedNotes]);

  if (isLoading) {
    return <ContentLoading />;
  }

  const onChange = (id) => {
    setMessages((prev) => {
      return prev.map((message) => {
        if (id === message.id) {
          return { ...message, isSelect: !message.isSelect };
        }

        return message;
      });
    });
  };

  const onDelete = () => {
    const filterdMessages = messages.filter((message) => message.isSelect).map((message) => message.id);
    mutate({ selectedNoteId: filterdMessages });
  };

  return (
    <section className={styles.wrapper}>
      <ul className={styles.noteList}>
        {messages ? (
          messages.map(({ id, title, from, content, time, isRead, isSelect }) => {
            return <NoteItem key={id} id={id} title={from} desc={title} date={time} isRead={isRead} isSelect={isSelect} onChange={onChange} />;
          })
        ) : (
          <div className={styles.notMessage}>쪽지가 없습니다.</div>
        )}
      </ul>
      <img src={`https://d2f3kqq80r3o3g.cloudfront.net/Frame 565.svg`} alt="메일 삭제" className={styles.button} onClick={onDelete} />
    </section>
  );
}

export default NoteReceiveList;
