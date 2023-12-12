import styles from './MenuHeader.module.css';

function MenuHeader() {
  return (
    <section className={styles.wrapper}>
      <img
        className={styles.profile}
        src={`https://d2f3kqq80r3o3g.cloudfront.net/User-56.svg`}
        alt='프로필'
      />
      <h3 className={styles.userName}>김유범</h3>
      <p className={styles.course}>
        클라우드 네이티브 애플리케이션 개발자 양성과정
      </p>
    </section>
  );
}

export default MenuHeader;
