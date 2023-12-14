import styles from "./UserEditContent.module.css";

function UserEditContent({category, information, setEditInfo}) {

  return (
    <div>
      <div className={styles.align}>
        <p>{category}</p>
        <input className={styles.color}
          placeholder={information}
          onChange={(e) => setEditInfo(e.target.value)}
        />
      </div>
    </div>
  );
}

export default UserEditContent;