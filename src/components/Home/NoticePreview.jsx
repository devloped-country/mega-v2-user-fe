import styles from './NoticePreview.module.css';
import { useNavigate } from 'react-router-dom';


function NoticePreview() {
  const navigate = useNavigate();

  const mapedNotices = [
    {
      id: 165,
      title: "안녕하세요.",
      content: "<figure class=\"image\"><img style=\"aspect-ratio:672/355;\" src=\"https://d2f3kqq80r3o3g.cloudfront.net/notice/f0c410d2-61df-48cb-94a0-5b0f9c22e905.png\" width=\"672\" height=\"355\"></figure><p>안녕하세요.</p><p>&nbsp;</p>",
      author: "asdsad",
      tags: [
        {
          id: 2,
          tag: "#안녕"
        }
      ],
      createdTime: "2023-11-30T13:55:05.040404",
      textContent: " 안녕하세요.",
      thumbnail: ""
    }
  ].map(
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

export default NoticePreview;