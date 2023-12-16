import InputPassword from './InputPassword';
import styles from './EditInfoList.module.css';
import ModalButton from '../common/ModalButton';
import { useMutation } from '@/hooks/useMutation';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PasswordList({ onAction }) {
  const navigate = useNavigate();

  const [password, setPassword] = useState(''); // 기존 비밀번호
  // const [editpassword, setEditPassword] = useState('');
  // const [isCorrectEditPassword, setIsCorrectEditPassword] = useState('');
  const [isShowingPWError, setIsShowingPWError] = useState(false);
  const [isShowingEditPWError, setIsShowingEditPWError] = useState(false);
  const [passwordInfo, setPasswordInfo] = useState({
    editpassword: '', // 새 비밀번호
    correctEditpassword: '', // 새 비밀번호 확인
  });

  const { mutate } = useMutation(
    async (param) =>
      await axios({
        url: '/api/user/updatePassword',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        method: 'put',
        data: param,
      }),
    {
      onSuccess: (data) => {
        //        if(data.existedPassword == password) {
        //          mutate({
        //            editpassword:passwordInfo.editpassword
        //          })
        //        }
        navigate('/info');
      },
      onError: () => {
        setIsShowingPWError(true);
      },
    }
  );

  const onCancelEditPassword = () => {
    navigate('/info');
  };

  const onEditButtonAction = () => {
    if (passwordInfo.editpassword !== passwordInfo.correctEditpassword) {
      setIsShowingEditPWError(true);
      return;
    }

    console.log({ password });
    mutate({
      existedPassword: password,
      editPassword: passwordInfo.editpassword,
    });
    // navigate('/info');
  };

  //  const onSavePassword = () => {
  //    if(editpassword != isCorrectEditPassword) {
  //      setIsShowingEditPWError(true);
  //    } else {
  //      mutate({
  //        existedPassword: passwordInfo.password,
  //        editPassword: passwordInfo.editpassword
  //      })
  //    }
  //  }

  return (
    <div className={styles.wrapper}>
      <InputPassword
        title='기존 비밀번호'
        value={password}
        setEditPassword={setPassword}
      />
      {isShowingPWError && (
        <span className={styles.validateMessage}>비밀번호가 틀렸어요.</span>
      )}
      <InputPassword
        title='새 비밀번호'
        value={passwordInfo.editpassword}
        setEditPassword={(value) =>
          setPasswordInfo((prev) => ({ ...prev, editpassword: value }))
        }
      />
      <InputPassword
        title='새 비밀번호 확인'
        value={passwordInfo.correctEditpassword}
        setEditPassword={(value) =>
          setPasswordInfo((prev) => ({ ...prev, correctEditpassword: value }))
        }
      />
      {isShowingEditPWError && (
        <span className={styles.validateMessage}>
          새 비밀번호가 일치하지 않아요.
        </span>
      )}
      <div className={styles.align}>
        <button onClick={onCancelEditPassword} className={styles.cancelButton}>
          취소
        </button>
        <ModalButton type='mutated' onAction={onEditButtonAction} text='저장' />
      </div>
    </div>
  );
}

export default PasswordList;
