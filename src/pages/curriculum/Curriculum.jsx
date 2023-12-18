import { useState } from "react";
import DropDownDetailSubject from "../../components/Curriculum/DropDownDetailSubject";
import styles from "./Curriculum.module.css";
import CurriculumPreview from "../../components/Home/CurriculumPreview";
import { useFetch } from "@/hooks/useFetch";
import ContentLoading from "@components/common/ContentLoading";
import axios from "axios";

function Curriculum() {
  const [showDetailSubject, setShowDetailSubject] = useState(false);

  const { data: curriculums, isLoading } = useFetch(
    [],
    async () =>
      await axios({
        url: "https://user.mzc-appmega.click/api/curriculum/read",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
  );

  if (isLoading) {
    return <ContentLoading />;
  }

  const mapedCurriculums = curriculums.data.data.map(({ content, startDate, endDate, subject, time }, index) => (
    <>
      <CurriculumPreview key={index} subject={subject} time={`${time}h`} startDate={startDate} endDate={endDate}>
        {showDetailSubject ? <img src="https://d2f3kqq80r3o3g.cloudfront.net/UpBrackets.svg" /> : <img src="https://d2f3kqq80r3o3g.cloudfront.net/DownBrackets.svg" />}
      </CurriculumPreview>
      {showDetailSubject && <DropDownDetailSubject content={content} />}
    </>
  ));

  return (
    <div className={styles.wrapper}>
      <ul
        style={{ width: "100%" }}
        onClick={() => {
          setShowDetailSubject((prev) => !prev);
        }}
      >
        {mapedCurriculums}
      </ul>
    </div>
  );
}

export default Curriculum;
