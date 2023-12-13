import EditInfoList from "../../components/Info/EditInfoList";
import UserInfoHeader from "../../components/Info/UserInfoHeader";
import styles from "./EditInfo.module.css";

function EditInfo() {

  return (
    <div className={styles.backColor}>
      <UserInfoHeader />
      <EditInfoList />
    </div>
  );
}

export default EditInfo;