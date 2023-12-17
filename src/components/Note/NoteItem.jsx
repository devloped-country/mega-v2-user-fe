import React, { useState } from "react";
import styles from "./NoteItem.module.css";

function NoteItem({ title, desc, date, isRead, onClick, onChange }) {
  const [isChecked, setChecked] = useState(false);

  const handleClickCheckbox = (e) => {
    e.stopPropagation();
    setChecked(!isChecked); // checkbox 상태를 토글
    // onChange(prev =>)
  };

  return (
    <li className={`${styles.noteItem} ${isRead ? "" : styles.unread}`} onClick={onClick}>
      <div className={styles.leftWrapper}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={isChecked}
          onChange={handleClickCheckbox}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
        <div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.desc}>{desc}</p>
        </div>
      </div>
      {isRead ? null : <div className={styles.redDot}></div>}
      <p className={styles.date}>{date}</p>
    </li>
  );
}

export default NoteItem;
