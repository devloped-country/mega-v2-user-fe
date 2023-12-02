import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

export default function Layout() {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header} />
      <section className={styles.main}>
        <Outlet />
      </section>
      <nav className={styles.nav}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <img
              src={`${
                import.meta.env.VITE_CLOUD_FRONT_ID
              }/free-icon-font-home-3917033 1.svg`}
              alt='home'
              className={styles.menuIcon}
            />
            <p className={styles.menu}>홈</p>
          </li>
          <li className={styles.menuItem}>
            <img
              src={`${
                import.meta.env.VITE_CLOUD_FRONT_ID
              }/free-icon-font-qr-scan-12436470 1.svg`}
              alt='qr'
              className={styles.menuIcon}
            />
            <p className={styles.menu}>QR</p>
          </li>
          <li className={styles.menuItem}>
            <img
              src={`${
                import.meta.env.VITE_CLOUD_FRONT_ID
              }/free-icon-font-calendar-check-7602580 1.svg`}
              alt='attendance'
              className={styles.menuIcon}
            />
            <p className={styles.menu}>출결</p>
          </li>
          <li className={styles.menuItem}>
            <img
              src={`${
                import.meta.env.VITE_CLOUD_FRONT_ID
              }/free-icon-font-menu-dots-3917075 1.svg`}
              alt='home'
              className={styles.menuIcon}
            />
            <p className={styles.menu}>더보기</p>
          </li>
        </ul>
      </nav>
    </section>
  );
}
