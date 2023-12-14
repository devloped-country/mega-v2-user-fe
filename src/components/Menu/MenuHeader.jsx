import styles from './MenuHeader.module.css';

function MenuHeader({onButtonAction, id, name, course}) {

  return (
    <section className={styles.wrapper}>
      <button onClick={onButtonAction} className={styles.intoUserInfo}>
        <img
          className={styles.profile}
          src={`${import.meta.env.VITE_CLOUD_FRONT_ID}/User-56.svg`}
          alt='프로필'
        />
        <h3 className={styles.userName}>{name}</h3>
        <p className={styles.course}>
          {course}
        </p>
      </button>
    </section>
  );
}

export default MenuHeader;
