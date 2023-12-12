import InfoList from "../../components/Info/InfoList";
import UserInfoHeader from "../../components/Info/UserInfoHeader";
import styles from "./Info.module.css";

function Info() {

  return (
    <div className={styles.backColor}>
      <UserInfoHeader />
      <InfoList />
    </div>
  );
}

export default Info;