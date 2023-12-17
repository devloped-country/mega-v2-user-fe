import EditInfoList from "../../components/Info/EditInfoList";
import UserInfoHeader from "../../components/Info/UserInfoHeader";
import styles from "./EditInfo.module.css";
import { useFetch } from "@/hooks/useFetch";
import axios from "axios";

function EditInfo() {
  const { data: userInfo, isLoading } = useFetch(
    [],
    async () =>
      await axios({
        url: `/api/user/read`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
  );

  if (isLoading) {
    return;
  }

  return (
    <div className={styles.backColor}>
      <UserInfoHeader course={userInfo.data.courseName} />
      <EditInfoList id={userInfo.data.id} name={userInfo.data.name} insitution={userInfo.data.institutionName} email={userInfo.data.email} phone={userInfo.data.phone} />
    </div>
  );
}

export default EditInfo;
