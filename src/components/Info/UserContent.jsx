import styles from './UserContent.module.css';

function UserContent({category, information}) {

  return (
    <div>
      <div className={styles.align}>
        <p>{category}</p>
        <p>{information}</p>
      </div>
    </div>
  );
}

export default UserContent;