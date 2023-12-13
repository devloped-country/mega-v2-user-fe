import styles from './UserContent.module.css';

function MoveEditPassword({onButtonClick, category}) {

  return (
    <div>
      <div className={styles.align}>
        <p>{category}</p>
        <img src='https://d2f3kqq80r3o3g.cloudfront.net/GotoEditPage.svg'
        onClick={onButtonClick}/>
      </div>
    </div>
  );
}

export default MoveEditPassword;