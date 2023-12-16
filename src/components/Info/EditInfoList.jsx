import UserContent from './UserContent';
import UserEditContent from './UserEditContent';
import styles from './EditInfoList.module.css';
import ModalButton from '../common/ModalButton';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@/hooks/useMutation';
import axios from 'axios';
import { useState } from 'react';

function EditInfoList({ id, name, insitution, email, phone }) {
  const [editInfo, setEditInfo] = useState({
    eidtName: '',
    editPhone: '',
  });

  const navigate = useNavigate();

  const onEditButtonAction = () => {
    console.log({ name, phone });
    mutate({
      name: editInfo.eidtName,
      phone: editInfo.editPhone,
    });
  };

  const onCancelEditInfo = () => {
    navigate('/info');
  };

  const { mutate } = useMutation(
    async (param) =>
      await axios({
        url: 'https://user.mzc-appmega.click/api/user/update',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        method: 'put',
        data: param,
      })
  );

  return (
    <div className={styles.wrapper}>
      <UserContent category='교육기관' information={insitution} />
      <UserEditContent
        category='이름'
        information={name}
        value={editInfo.eidtName}
        setEditInfo={(value) =>
          setEditInfo((prev) => ({ ...prev, name: value }))
        }
      />
      <UserContent category='이메일' information={email} />
      <UserEditContent
        category='전화번호'
        information={phone}
        value={editInfo.editPhone}
        setEditInfo={(value) =>
          setEditInfo((prev) => ({ ...prev, phone: value }))
        }
      />
      <div className={styles.align}>
        <button onClick={onCancelEditInfo} className={styles.cancelButton}>
          취소
        </button>
        <ModalButton type='mutated' onAction={onEditButtonAction} text='저장' />
      </div>
    </div>
  );
}

export default EditInfoList;
