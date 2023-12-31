import styles from "./NoticeContent.module.css";
import { useFetch } from "@/hooks/useFetch";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ContentLoading from "../common/ContentLoading";

function NoticeContent() {
  const navigate = useNavigate();
  const { data: notices, isLoading } = useFetch(
    [],
    async () =>
      await axios({
        url: "https://user.mzc-appmega.click/api/notice/notices",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
  );

  if (isLoading) {
    return <ContentLoading />;
  }

  const mapedNotices = notices.data.data.map(({ id, title, textContent, tags, author, createdTime }) => {
    const mapedTags = tags.map(({ id, tag }) => (
      <span key={id} className={styles.tag}>
        {tag}
      </span>
    ));

    return (
      <li
        key={id}
        className={styles.noticeItem}
        // onClick={() => navigate(`/notice/${id}`)}
      >
        <div className={styles.createdInfo}>
          <img src={`https://d2f3kqq80r3o3g.cloudfront.net/User-24.svg`} alt="이미지" />
          <div>
            <p className={styles.author}>{author}</p>
            <p className={styles.createdTime}>{`${new Date(createdTime).getFullYear()} ${new Date(createdTime).getMonth() + 1}-${new Date(createdTime).getDate()}`}</p>
          </div>
        </div>
        <div className={styles.noticeInfo}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.content}>{textContent}</p>
          <div className={styles.tags}>{mapedTags}</div>
        </div>
      </li>
    );
  });

  return (
    <section className={styles.wrapper}>
      <ul>{mapedNotices}</ul>
    </section>
  );
}

export default NoticeContent;
