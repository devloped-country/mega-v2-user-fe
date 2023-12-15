import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./Layout.module.css";
import { useNewSocket } from "@/hooks/useNewSocket";

export default function Layout() {
  const location = useLocation();
  useNewSocket();

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
              <Link to='/' className={styles.link}>
                <img
                  src={`https://d2f3kqq80r3o3g.cloudfront.net/free-icon-font-home-3917033 1.svg`}
                  alt='home'
                  className={styles.menuIcon}
                />
                <p className={styles.menu}>홈</p>
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to='/qr' className={styles.link}>
                <img
                  src={`https://d2f3kqq80r3o3g.cloudfront.net/free-icon-font-qr-scan-12436470 1.svg`}
                  alt='qr'
                  className={styles.menuIcon}
                />
                <p className={styles.menu}>QR</p>
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to='/attendance' className={styles.link}>
                <img
                  src={`https://d2f3kqq80r3o3g.cloudfront.net/free-icon-font-calendar-check-7602580 1.svg`}
                  alt='attendance'
                  className={styles.menuIcon}
                />
                <p className={styles.menu}>출결</p>
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to='/menu' className={styles.link}>
                <img
                  src={`https://d2f3kqq80r3o3g.cloudfront.net/free-icon-font-menu-dots-3917075 1.svg`}
                  alt='home'
                  className={styles.menuIcon}
                />
                <p className={styles.menu}>더보기</p>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </section>
  );
}
