import styles from './Header.module.css';


function Header({headerText, onButtonAction}) {
  
  return(
    <div>
      <button onClick={onButtonAction} className={styles.wrapper}>
      <img
      src='https://d2f3kqq80r3o3g.cloudfront.net/Calender.svg'
      />
      {headerText}
      <img
      src='https://d2f3kqq80r3o3g.cloudfront.net/RightPointer.svg'
      />
      </button>
    </div>
  );
}

export default Header;