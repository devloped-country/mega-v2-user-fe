import styles from './UserInfoHeader.module.css';

function UserInfoHeader({id, name, course}) {

  return (
    <section className={styles.wrapper}>
        <img
          className={styles.profile}
          src={`${import.meta.env.VITE_CLOUD_FRONT_ID}/User-56.svg`}
          alt='프로필'
        />
        <h3 className={styles.userName}>{name}</h3>
        <p className={styles.course}>
          {course}
        </p>
        
    </section>
  );
}

export default UserInfoHeader;