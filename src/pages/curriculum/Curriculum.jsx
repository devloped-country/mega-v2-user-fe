import { useState } from "react";
import DropDownDetailSubject from "../../components/Curriculum/DropDownDetailSubject";
import styles from './Curriculum.module.css';
import CurriculumPreview from "../../components/Home/CurriculumPreview";

function Curriculum() {
  const [showDetailSubject, setShowDetailSubject] = useState(false);

  const handleDetailSubject = () => {
    !showDetailSubject;
  }

  return(
    <div className={styles.wrapper}>
      <ul onClick={() => {setShowDetailSubject(!showDetailSubject)}}>
        <CurriculumPreview
          subject='리눅스 시스템 이해하기'
          time='35h'
          startDate='23.05.25'
          endDate='23.06.01'
          
        >
        {showDetailSubject ? (
        <img src='https://d2f3kqq80r3o3g.cloudfront.net/UpBrackets.svg'/>)
        : (<img src='https://d2f3kqq80r3o3g.cloudfront.net/DownBrackets.svg'/>)}
        </CurriculumPreview>
        
        {showDetailSubject && <DropDownDetailSubject/>}
      </ul>
    </div>
  );
}

export default Curriculum;