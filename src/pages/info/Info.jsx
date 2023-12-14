import { useNavigate } from "react-router-dom";
import InfoList from "../../components/Info/InfoList";
import UserInfoHeader from "../../components/Info/UserInfoHeader";
import styles from "./Info.module.css";

function Info() {

  const navigator = useNavigate();

  const handleEditInfomation = () => {
    navigator('edit');
  }

<<<<<<< Updated upstream
=======
  const {
    data : user,
    isLoading
  } = useFetch(
    [],
    [],
    async () => await axios(`/api/curriculum/read/${id}`)
  )

  if(isLoading) {
    return 
  }

  const mapedUser = user.data.data.map(
    ({user_id,  course_id, institution_id, name, phone, email}) => {
      return (
        <InfoList 
          key={user_id}
          id={user_id}
          courseId={course_id}
          institutionId={institution_id}
          name={name}
          phone={phone}
          email={email}
        />
      )
    }
  )

>>>>>>> Stashed changes
  return (
    <div className={styles.backColor}>
      <UserInfoHeader
      />
      <img 
          src="https://d2f3kqq80r3o3g.cloudfront.net/editUserInfo.svg"
          className={styles.editButton}
          onClick={handleEditInfomation}
        />
      <InfoList />
    </div>
  );
}

export default Info;