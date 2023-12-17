import styles from "./NoticeDetail.module.css";
import { useParams } from "react-router-dom";
import { useFetch } from "@/hooks/useFetch";
import axios from "axios";

function NoticeDetail() {
  const { id } = useParams();
  const { data: notice, isLoading } = useFetch(
    [],
    async () =>
      await axios({
        url: `/api/notice/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
  );

  if (isLoading) {
    return <div>로딩중..</div>;
  }
  console.log(notice);
  const mapedTags = notice.data.data.tags.map(({ id, tag }) => (
    <span key={id} className={styles.tag}>
      {tag}
    </span>
  ));

  return (
    <div className={styles.wrapper}>
      <div className={styles.createdInfo}>
        <p className={styles.author}>{notice.data.data.author}</p>
        <p className={styles.createdTime}>
          {`${new Date(notice.data.data.createdTime).getFullYear()} ${new Date(notice.data.data.createdTime).getMonth() + 1}-${new Date(notice.data.data.createdTime).getDate()}`}
        </p>
      </div>
      <div className={styles.noticeInfo}>
        <h3 className={styles.title}>{notice.data.data.title}</h3>
        <p className={styles.content}>{notice.data.data.textContent}</p>
        <div className={styles.tags}>{mapedTags}</div>
      </div>
    </div>
  );
}

export default NoticeDetail;
