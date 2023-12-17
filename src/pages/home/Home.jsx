import { useNavigate } from 'react-router-dom';
import Header from '../../components/Home/Header';
import Detail from '../../components/Home/Detail';
import CurriculumPreview from '../../components/Home/CurriculumPreview';
import AddBanner from '../../components/common/AddBanner';
import styles from './Home.module.css';
import { useFetchs } from '@/hooks/useFetchs';
import ContentLoading from '../../components/common/ContentLoading';

function Home() {
  const navigate = useNavigate();
  const { data, isLoading } = useFetchs(
    [],
    [
      {
        url: '/api/notice/notices',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      },
      {
        url: '/api/curriculum/read',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      },
    ]
  );

  if (isLoading) {
    return <ContentLoading />;
  }

  const handleAttendance = () => {
    navigate('leave');
  };

  const handleNotice = () => {
    navigate('notice');
  };

  const handleCurriculum = () => {
    navigate('curriculum');
  };

  const notices = data[0].data.filter((data, index) => index < 2);
  const mapedNotices = notices.map(
    ({ id, title, textContent, tags, author, createdTime }) => {
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
            <img
              src={`https://d2f3kqq80r3o3g.cloudfront.net/User-24.svg`}
              alt='이미지'
            />
            <div>
              <p className={styles.author}>{author}</p>
              <p className={styles.createdTime}>
                {`${new Date(createdTime).getFullYear()} ${
                  new Date(createdTime).getMonth() + 1
                }-${new Date(createdTime).getDate()}`}
              </p>
            </div>
          </div>
          <div className={styles.noticeInfo}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.content}>{textContent}</p>
            <div className={styles.tags}>{mapedTags}</div>
          </div>
        </li>
      );
    }
  );

  const curriculums = data[1].data.filter((data, index) => index < 3);
  const mapedCurriculums = curriculums.map((curriculum) => {
    console.log(curriculum);
    return (
      <CurriculumPreview
        key={curriculum.curriculum_id}
        subject={curriculum.subject}
        time={`${curriculum.time}h`}
        startDate={curriculum.startDate}
        endDate={curriculum.endDate}
      ></CurriculumPreview>
    );
  });

  return (
    <div className={styles.wrapper}>
      <Header
        headerText='병가ㆍ공가ㆍ조퇴를 신청해야하나요?'
        onButtonAction={handleAttendance}
      />
      <Detail title='공지사항' onButtonAction={handleNotice} />
      <ul style={{ padding: '8px' }}>{mapedNotices}</ul>
      <AddBanner />
      <Detail title='커리큘럼' onButtonAction={handleCurriculum} />
      <ul style={{ padding: '8px' }}>{mapedCurriculums}</ul>
    </div>
  );
}

export default Home;
