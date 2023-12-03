import { Link } from 'react-router-dom';
import styles from './MenuItem.module.css';

function MenuItem({ img, text, to }) {
  return (
    <li className={styles.wrapper}>
      <Link to={to} className={styles.link}>
        <div className={styles.left}>
          <img src={img} alt={text} />
          <h4 className={styles.title}>{text}</h4>
        </div>
        <img
          src={`${
            import.meta.env.VITE_CLOUD_FRONT_ID
          }/free-icon-font-angle-right-3916949 1.svg`}
          alt='화살표'
        />
      </Link>
    </li>
  );
}

export default MenuItem;
