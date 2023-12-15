import UserContent from "./UserContent";
import styles from "./InfoList.module.css";
import { useNavigate } from "react-router-dom";
import MoveEditPassword from "./MoveEditPassword";

function InfoList({ id, institution, email, phone }) {

  const navigate = useNavigate();

  const handleEditPassword = () => {
    navigate('password');
  }

  return (
    <div className={styles.wrapper}>
      <UserContent
        category='교육기관'
        information={institution}
      />
      <MoveEditPassword
        category='비밀번호 변경'
        onButtonClick={handleEditPassword}
      />
      <UserContent
        category='이메일'
        information={email}
      />
      <UserContent
        category='전화번호'
        information={phone}
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