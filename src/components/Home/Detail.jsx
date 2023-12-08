import styles from './Detail.module.css';

function Detail({title, onButtonAction}) {

  return(
    <div className={styles.wrapper} onClick={onButtonAction}>
      {title}
      <img
      src='https://d2f3kqq80r3o3g.cloudfront.net/RightBrackets.svg'
      />
    </div>
  );

}

export default Detail;