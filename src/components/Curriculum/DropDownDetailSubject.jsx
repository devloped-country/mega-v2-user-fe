import styles from './DropDownDetailSubject.module.css';

function DropDownDetailSubject() {
  
  return (
    <div className={styles.wrapper}>
      <li className={styles.detailSubject}>운영체제 및 서버 이해</li>
      <li className={styles.detailSubject}>리눅스 기초 명령 활용하기</li>
      <li className={styles.detailSubject}>3Tier 아키텍쳐 구성</li>
    </div>
  )
}

export default DropDownDetailSubject;