import { useNavigate } from "react-router-dom";
import InfoList from "../../components/Info/InfoList";
import UserInfoHeader from "../../components/Info/UserInfoHeader";
import styles from "./Info.module.css";
import { useFetch } from "@/hooks/useFetch";
import axios from "axios";

function Info() {
  const navigator = useNavigate();

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

  const handleEditInfomation = () => {
    navigator("edit");
  };

  console.log(userInfo);

  // const mapedUsrInfo = userInfo.data.map(
  //   ({ name, id, course, institution, email, phone }) => {
  //     return (
  //       <InfoList
  //         key={id}
  //         id={id}
  //         name={name}
  //         course={course}
  //         institution={institution}
  //         email={email}
  //         phone={phone}
  //       />
  //     );
  //   }
  // );

  return (
    <div className={styles.backColor}>
      <UserInfoHeader id={userInfo.data.id} name={userInfo.data.name} course={userInfo.data.courseName} />
      <img src="https://d2f3kqq80r3o3g.cloudfront.net/editUserInfo.svg" className={styles.editButton} onClick={handleEditInfomation} />
      <InfoList id={userInfo.data.id} institution={userInfo.data.institutionName} email={userInfo.data.email} phone={userInfo.data.phone} />
    </div>
  );
}

export default Info;
