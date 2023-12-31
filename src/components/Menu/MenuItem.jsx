import { Link } from 'react-router-dom';
import styles from './MenuItem.module.css';

function MenuItem({ img, text, to, onAction }) {
  return (
    <li className={styles.wrapper}>
      <Link to={to} className={styles.link} onClick={onAction}>
        <div className={styles.left}>
          <img src={img} alt={text} />
          <h4 className={styles.title}>{text}</h4>
        </div>
        <img
          src={`https://d2f3kqq80r3o3g.cloudfront.net/free-icon-font-angle-right-3916949 1.svg`}
          alt='화살표'
        />
      </Link>
    </li>
  );
}

export default MenuItem;
