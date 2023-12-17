import UserContent from "./UserContent";
import UserEditContent from "./UserEditContent";
import styles from "./EditInfoList.module.css";
import ModalButton from "../common/ModalButton";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@/hooks/useMutation";
import axios from "axios";
import { useState } from "react";

function EditInfoList({ id, name, insitution, email, phone }) {
  const [editInfo, setEditInfo] = useState({
    editName: "",
    editPhone: "",
  });

  const navigate = useNavigate();

  const onEditButtonAction = () => {
    mutate({
      name: editInfo.editName,
      phone: editInfo.editPhone,
    });
  };

  const onCancelEditInfo = () => {
    navigate("/info");
  };
  console.log(editInfo);
  const { mutate } = useMutation(
    async (param) =>
      await axios({
        url: "/api/user/update",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        method: "put",
        data: param,
      }),
    {
      onSuccess: () => {
        navigate("/menu");
      },
    }
  );

  return (
    <div className={styles.wrapper}>
      <UserContent category="교육기관" information={insitution} />
      <UserEditContent category="이름" information={name} value={editInfo.editName} setEditInfo={(value) => setEditInfo((prev) => ({ ...prev, editName: value }))} />
      <UserContent category="이메일" information={email} />
      <UserEditContent category="전화번호" information={phone} value={editInfo.editPhone} setEditInfo={(value) => setEditInfo((prev) => ({ ...prev, editPhone: value }))} />
      <div className={styles.align}>
        <button onClick={onCancelEditInfo} className={styles.cancelButton}>
          취소
        </button>
        <ModalButton type="mutated" onAction={onEditButtonAction} text="저장" />
      </div>
    </div>
  );
}

export default EditInfoList;
