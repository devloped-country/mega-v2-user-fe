import styles from './AddBanner.module.css'

function AddBanner() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textAlign}>
        <h2 className={styles.topText}>이스트소프트 AI 개발 과정</h2>
        <h3 className={styles.underText}>접수기간 : 11.20(월) ~ 12.22(금)</h3>
      </div>
      <img src='https://d2f3kqq80r3o3g.cloudfront.net/AddBannerImg.svg' />
    </div>
  )
}

export default AddBanner;