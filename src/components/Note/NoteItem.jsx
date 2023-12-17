import React, { useState } from "react";
import styles from "./NoteItem.module.css";
import NoteModal from "./NoteModal";

function NoteItem({ title, desc, date, id, isRead, isSelect, onChange }) {
  const [isShowingModal, setIsShowingModal] = useState(false);

  const onOpen = () => {
    setIsShowingModal(true);
  };

  const onClose = () => {
    setIsShowingModal(false);
  };

  const onSelect = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <li className={`${styles.noteItem} ${isRead ? "" : styles.unread}`} onClick={onOpen}>
        <div className={styles.leftWrapper}>
          <input
            type="checkbox"
            className={styles.checkbox}
            // checked={isChecked}
            checked={isSelect}
            onChange={() => onChange(id)}
            onClick={onSelect}
          />
          <div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.desc}>{desc}</p>
          </div>
        </div>
        {isRead ? null : <div className={styles.redDot}></div>}
        <p className={styles.date}>{date}</p>
      </li>
      {isShowingModal && <NoteModal id={id} handleClose={onClose} />}
    </>
  );
}

export default NoteItem;
