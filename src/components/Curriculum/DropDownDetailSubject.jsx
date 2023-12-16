import styles from './DropDownDetailSubject.module.css';

function DropDownDetailSubject({ content }) {
  const mapedContent = content.map(({ id, content }) => (
    <li key={id} className={styles.detailSubject}>
      {content}
    </li>
  ));

  return <div className={styles.wrapper}>{mapedContent}</div>;
}

export default DropDownDetailSubject;
