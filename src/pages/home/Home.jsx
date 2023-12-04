import { useNavigate } from "react-router-dom";
import Header from "../../components/Home/Header";
import Detail from "../../components/Home/Detail";
import NoticePreview from "../../components/Home/NoticePreview";
import CurriculumPreview from "../../components/Home/CurriculumPreview";

function Home() {
  const navigate = useNavigate();

  const handleAttendance = () => {
    navigate('attendance');
  }

  const handleNotice = () => {
    navigate('notice');
  }

  const handleCurriculum = () => {
    navigate('curriculum');
  }
  return(
    <div>
    <Header
      headerText='병가ㆍ공가ㆍ조퇴를 신청해야하나요?'
      onButtonAction={handleAttendance}
    />
    <Detail
      title='공지사항'
      onButtonAction={handleNotice}
    />
    <NoticePreview/>

    <Detail
      title='커리큘럼'
      onButtonAction={handleCurriculum}
    />
    <CurriculumPreview
      subject='리눅스 시스템 이해하기'
      time='35h'
      startDate='23.05.25'
      endDate='23.06.01'
    />
    <CurriculumPreview
      subject='2차 프로젝트'
      time='140h'
      startDate='23.11.21'
      endDate='23.12.18'
    />
    
    </div>
  );
}

export default Home;