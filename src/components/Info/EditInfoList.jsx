import UserContent from "./UserContent";
import UserEditContent from "./UserEditContent";
import styles from "./EditInfoList.module.css";
import ModalButton from "../common/ModalButton";
import { useNavigate } from "react-router-dom";
import { useMutation } from '@/hooks/useMutation';
import axios from 'axios';
import { useState } from "react";


function EditInfoList({id, name, insitution, email, phone}) {

  const navigate = useNavigate();

  const [editName, setEditName] = useState('');
  const [editPhone, setEditPhone] = useState('');

  const onEditButtonAction = () => {
    console.log({editName, editPhone});
    mutate({
      editName,
      editPhone
    })
    navigate('/info');
  }

  const { mutate } = useMutation(
    async (param) =>
    await axios({
      url: '/api/user/update',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      method: 'post',
      data: param,
    })
  )

  return (
    <div className={styles.wrapper}>
      <UserContent
        category='교육기관'
        information={insitution}
      />
      <UserEditContent
        category='이름'
        information={name}
        value={editName}
        setEditInfo={setEditName}
      />
      <UserContent
        category='이메일'
        information={email}
      />
      <UserEditContent
        category='전화번호'
        information={phone}
        value={editPhone}
        setEditInfo={setEditPhone}
      />
      <div className={styles.align}>
        <p>취소</p>
        <ModalButton type='mutated' onAction={onEditButtonAction} text='저장'/>
      </div>
    </div>
  );
}

export default EditInfoList;