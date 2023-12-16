import styles from './NoticeContent.module.css';
import { useFetch } from '@/hooks/useFetch';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NoticeContent() {
  const navigate = useNavigate();
  const { data: notices, isLoading } = useFetch(
    [],
    async () => await axios('https://user.mzc-appmega.click/api/notice')
  );

  if (isLoading) {
    return <div>로딩중..</div>;
  }

  const mapedNotices = notices.data.data.content.map(
    ({ id, title, textContent, thumbnail, tags, author, createdTime }) => {
      const mapedTags = tags.map(({ id, tag }) => (
        <span key={id} className={styles.tag}>
          {tag}
        </span>
      ));

      return (
        <li
          key={id}
          className={styles.noticeItem}
          onClick={() => navigate(`/notice/${id}`)}
        >
          <div className={styles.createdInfo}>
            <p className={styles.author}>{author}</p>
            <p className={styles.createdTime}>
              {`${new Date(createdTime).getFullYear()} ${
                new Date(createdTime).getMonth() + 1
              }-${new Date(createdTime).getDate()}`}
            </p>
          </div>
          <img src={thumbnail} alt={title} />
          <div className={styles.noticeInfo}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.content}>
              {textContent}
              안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.
            </p>
            <div className={styles.tags}>{mapedTags}</div>
          </div>
        </li>
      );
    }
  );

  return (
    <section className={styles.wrapper}>
      <ul>{mapedNotices}</ul>
    </section>
  );
}

export default NoticeContent;
