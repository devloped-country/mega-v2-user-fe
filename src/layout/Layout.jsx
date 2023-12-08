import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./Layout.module.css";
import { useSocket } from "@/hooks/useSocket";
import { useEffect } from "react";

export default function Layout() {
  const location = useLocation();
  const { doOpen } = useSocket();

  useEffect(() => {
    doOpen();
  }, []);

  return (
    <section className={styles.wrapper}>
      {location.pathname !== "/qr" && <header className={styles.header}>Mega</header>}
      <section className={`${styles.main} ${location.pathname === "/qr" && styles.qr}`}>
        <Outlet />
      </section>
      {!location.pathname.includes("/qr/") && (
        <nav className={styles.nav}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link to="/" className={styles.link}>
                <img src={`${import.meta.env.VITE_CLOUD_FRONT_ID}/free-icon-font-home-3917033 1.svg`} alt="home" className={styles.menuIcon} />
                <p className={styles.menu}>홈</p>
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/qr" className={styles.link}>
                <img src={`${import.meta.env.VITE_CLOUD_FRONT_ID}/free-icon-font-qr-scan-12436470 1.svg`} alt="qr" className={styles.menuIcon} />
                <p className={styles.menu}>QR</p>
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/attendance" className={styles.link}>
                <img src={`${import.meta.env.VITE_CLOUD_FRONT_ID}/free-icon-font-calendar-check-7602580 1.svg`} alt="attendance" className={styles.menuIcon} />
                <p className={styles.menu}>출결</p>
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/menu" className={styles.link}>
                <img src={`${import.meta.env.VITE_CLOUD_FRONT_ID}/free-icon-font-menu-dots-3917075 1.svg`} alt="home" className={styles.menuIcon} />
                <p className={styles.menu}>더보기</p>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </section>
  );
}
