import { useNavigate } from "react-router-dom";
import styles from "./NoteContent.module.css";
import { useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import axios from "axios";

function NoteContent() {
  const navigate = useNavigate();
  const [isShowingReceiverModal, setIsShowingReceiverModal] = useState(false);

  const { data, isLoading } = useFetch(
    [],
    async () =>
      await axios({
        url: "/api/note/receivers",
        method: "get",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
  );

  if (isLoading) {
    return;
  }
  console.log("불러온정보" + data);

  //id,name,email
  const handleClickMailSendButton = () => {
    setIsShowingReceiverModal(true);
  };

  const handleClose = () => {
    setIsShowingReceiverModal(false);
  };

  const receiverList =
    data && data.data
      ? data.data.map(({ id, email, name }) => (
          <li
            key={id}
            className={styles.receiverItem}
            onClick={() =>
              navigate("/note/editor", {
                state: {
                  receiver: name + " 매니저님",
                  receiverId: id,
                },
              })
            }
          >
            <img
              src="https://mblogthumb-phinf.pstatic.net/MjAyMTEyMzFfMTYw/MDAxNjQwOTMyNjEyMjU4.0CtqFXmwxPTP73-1814Z6CqNeDsuWKCWOptcbDqvFj0g.pW71_YTc7CpVvwZ4_6bbfzp8YvK4WnfiKecXYl4zlBEg.PNG.moonskinz/%EB%AC%B8%EB%94%94%EC%9E%90%EC%9D%B8_%EB%94%94%EC%8A%A4%EC%BD%94%EB%93%9C_%285%29.png?type=w420"
              alt="프로필"
              className={styles.profile}
            />
            {name} 매니저님
          </li>
        ))
      : [];

  return (
    <>
      <ul className={styles.noteList}>
        <li className={styles.noteItem} onClick={() => navigate("/note/receive")}>
          <img src={`https://d2f3kqq80r3o3g.cloudfront.net/free-icon-font-calendar-check-7602580.svg`} />
          수신쪽지함
        </li>
        <li className={styles.noteItem} onClick={() => navigate("/note/send")}>
          <img src={`https://d2f3kqq80r3o3g.cloudfront.net/free-icon-font-calendar-exclamation-7602584.svg`} />
          발신쪽지함
        </li>
        <li className={styles.noteItem} onClick={() => navigate("/note/trash")}>
          <img src={`https://d2f3kqq80r3o3g.cloudfront.net/trash 1.svg`} />
          휴지통
        </li>
      </ul>
      <img src={`https://d2f3kqq80r3o3g.cloudfront.net/Frame 565-1.svg`} alt="메일 보내기" className={styles.button} onClick={handleClickMailSendButton} />
      {isShowingReceiverModal && (
        <>
          <ul className={styles.receiverList}>{receiverList}</ul>
          <div className={styles.backdrop} onClick={handleClose} />
        </>
      )}
    </>
  );
}

export default NoteContent;
