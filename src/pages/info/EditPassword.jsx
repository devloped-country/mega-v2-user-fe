import PasswordList from "../../components/Info/PasswordList";
import UserInfoHeader from "../../components/Info/UserInfoHeader";
import styles from "./EditInfo.module.css";

function EditPassword() {

  return (
    <div className={styles.backColor}>
      <UserInfoHeader />
      <PasswordList />
    </div>
  );
}

export default EditPassword;