import InputPassword from "./InputPassword";
import styles from "./EditInfoList.module.css";
import ModalButton from "../common/ModalButton";
import { useMutation } from '@/hooks/useMutation';
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PasswordList ({ onAction }) {

  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [editpassword, setEditPassword] = useState('');
  const [isCorrectPassword, setIsCorrectPassword] = useState('');

  const onEditButtonAction = () => {
    console.log({password});
    mutate({
      editpassword
    })
    navigate('/info');
    
  }

  const { mutate } = useMutation(
    async (param) =>
    await axios({
      url: '/api/user/updatePassword',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      method: 'post',
      data: param,
    })
  )

  return (
    <div className={styles.wrapper}>
      <InputPassword 
        title='기존 비밀번호'
        value={password}
        setEditPassword={setPassword}
      />
      <InputPassword 
        title='새 비밀번호'
        value={editpassword}
        setEditPassword={setEditPassword}
      />
      <InputPassword 
        title='새 비밀번호 확인'
        value={isCorrectPassword}
        setEditPassword={setIsCorrectPassword}
      />
      <div className={styles.align}>
        <p>취소</p>
        <ModalButton type='mutated' onAction={onEditButtonAction} text='저장'/>
      </div>
    </div>
  );
}

export default PasswordList;