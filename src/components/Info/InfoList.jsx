import UserContent from "./UserContent";
import styles from "./InfoList.module.css";
import EditPassword from "./EditPassword";
import { useNavigate } from "react-router-dom";

function InfoList() {

  const navigate = useNavigate();

  const handleEditPassword = () => {
    navigate('/editpassword');
  }

  return (
    <div className={styles.wrapper}>
      <UserContent
        category='생년월일'
        information='1997.12.04'
      />
      <EditPassword
        category='비밀번호 변경'
        onButtonClick={handleEditPassword}
      />
      <UserContent
        category='이메일'
        information='kub1234@naver.com'
      />
      <UserContent
        category='전화번호'
        information='01012345678'
      />
      <UserContent
        category='주소'
        information='대연역 2번출구'
      />
      <UserContent
        category='계좌번호'
        information='국민 12345678901234'
      />
    </div>
  )

}

export default InfoList;