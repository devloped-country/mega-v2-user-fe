import styles from "./UserEditContent.module.css";

function UserEditContent({category, information}) {

  return (
    <div>
      <div className={styles.align}>
        <p>{category}</p>
        <input className={styles.color}
          placeholder={information}
        />
      </div>
    </div>
  );
}

export default UserEditContent;