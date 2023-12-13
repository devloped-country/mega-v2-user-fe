import InputPassword from "./InputPassword";
import styles from "./EditInfoList.module.css";
import ModalButton from "../common/ModalButton";

function PasswordList () {

  return (
    <div className={styles.wrapper}>
      <InputPassword 
        title='기존 비밀번호'
      />
      <InputPassword 
        title='새 비밀번호'
      />
      <InputPassword 
      title='새 비밀번호 확인'
      />
      <div className={styles.align}>
        <p>취소</p>
        <ModalButton type='mutated' onAction={() => {}} text='저장' />
      </div>
    </div>
  );
}

export default PasswordList;