import UserContent from "./UserContent";
import UserEditContent from "./UserEditContent";
import styles from "./EditInfoList.module.css";


function EditInfoList() {

  return (
    <div className={styles.wrapper}>
      <UserEditContent
        category='생년월일'
        information='1997.12.14'
      />
      <UserContent
        category='이메일'
        information='kub1234@naver.com'
      />
      <UserEditContent
        category='전화번호'
        information='01012345678'
      />
    </div>
  );
}

export default EditInfoList;