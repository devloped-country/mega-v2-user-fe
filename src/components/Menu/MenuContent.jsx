import { useNavigate } from "react-router-dom";
import MenuHeader from "./MenuHeader";
import MenuList from "./MenuList";
import { useFetch } from "@/hooks/useFetch";
import axios from "axios";
import ContentLoading from "../common/ContentLoading";

function MenuContent() {
  const navigate = useNavigate();

  const handleUserInfo = () => {
    navigate("/info");
  };

  const { data: userInfo, isLoading } = useFetch(
    [],
    async () =>
      await axios({
        url: `https://user.mzc-appmega.click/api/user/read`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
  );

  if (isLoading) {
    return <ContentLoading />;
  }

  return (
    <>
      <MenuHeader
        id={userInfo.data.id}
        name={userInfo.data.name}
        course={userInfo.data.courseName}
        insitution={userInfo.data.institutionName}
        phone={userInfo.data.phone}
        onButtonAction={handleUserInfo}
      />
      <MenuList />
    </>
  );
}

export default MenuContent;
