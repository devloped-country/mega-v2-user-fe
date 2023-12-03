import { useNavigate } from 'react-router-dom';
import styles from './NoteContent.module.css';
import { useState } from 'react';

function NoteContent() {
  const navigate = useNavigate();
  const [isShowingReceiverModal, setIsShowingReceiverModal] = useState(false);

  const handleClickMailSendButton = () => {
    setIsShowingReceiverModal(true);
  };

  const handleClose = () => {
    setIsShowingReceiverModal(false);
  };

  return (
    <>
      <ul className={styles.noteList}>
        <li
          className={styles.noteItem}
          onClick={() => navigate('/note/receive')}
        >
          <img
            src={`${
              import.meta.env.VITE_CLOUD_FRONT_ID
            }/free-icon-font-calendar-check-7602580.svg`}
          />
          수신쪽지함
        </li>
        <li className={styles.noteItem}>
          <img
            src={`${
              import.meta.env.VITE_CLOUD_FRONT_ID
            }/free-icon-font-calendar-exclamation-7602584.svg`}
          />
          발신쪽지함
        </li>
        <li className={styles.noteItem}>
          <img src={`${import.meta.env.VITE_CLOUD_FRONT_ID}/trash 1.svg`} />
          휴지통
        </li>
      </ul>
      <img
        src={`${import.meta.env.VITE_CLOUD_FRONT_ID}/Frame 565-1.svg`}
        alt='메일 보내기'
        className={styles.button}
        onClick={handleClickMailSendButton}
      />
      {isShowingReceiverModal && (
        <>
          <ul className={styles.receiverList}>
            <li
              className={styles.receiverItem}
              onClick={() =>
                navigate('/note/editor', {
                  state: {
                    receiver: '김예진 매니저님',
                  },
                })
              }
            >
              <img
                src='https://mblogthumb-phinf.pstatic.net/MjAyMTEyMzFfMTYw/MDAxNjQwOTMyNjEyMjU4.0CtqFXmwxPTP73-1814Z6CqNeDsuWKCWOptcbDqvFj0g.pW71_YTc7CpVvwZ4_6bbfzp8YvK4WnfiKecXYl4zlBEg.PNG.moonskinz/%EB%AC%B8%EB%94%94%EC%9E%90%EC%9D%B8_%EB%94%94%EC%8A%A4%EC%BD%94%EB%93%9C_%285%29.png?type=w420'
                alt='프로필'
                className={styles.profile}
              />
              김예진 매니저님
            </li>
            <li
              className={styles.receiverItem}
              onClick={() =>
                navigate('/note/editor', {
                  state: {
                    receiver: '김윤정 매니저님',
                  },
                })
              }
            >
              <img
                src='https://mblogthumb-phinf.pstatic.net/MjAyMTEyMzFfMTYw/MDAxNjQwOTMyNjEyMjU4.0CtqFXmwxPTP73-1814Z6CqNeDsuWKCWOptcbDqvFj0g.pW71_YTc7CpVvwZ4_6bbfzp8YvK4WnfiKecXYl4zlBEg.PNG.moonskinz/%EB%AC%B8%EB%94%94%EC%9E%90%EC%9D%B8_%EB%94%94%EC%8A%A4%EC%BD%94%EB%93%9C_%285%29.png?type=w420'
                alt='프로필'
                className={styles.profile}
              />
              김윤정 매니저님
            </li>
          </ul>
          <div className={styles.backdrop} onClick={handleClose} />
        </>
      )}
    </>
  );
}

export default NoteContent;
