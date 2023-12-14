import { useNavigate } from "react-router-dom";
import InfoList from "../../components/Info/InfoList";
import UserInfoHeader from "../../components/Info/UserInfoHeader";
import styles from "./Info.module.css";

function Info() {

  const navigator = useNavigate();

  const handleEditInfomation = () => {
    navigator('edit');
  }

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