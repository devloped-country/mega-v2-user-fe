import styles from './MenuList.module.css';
import MenuItem from './MenuItem';

function MenuList() {
  return (
    <ul className={styles.wrapper}>
      <MenuItem
        img={`https://d2f3kqq80r3o3g.cloudfront.net/free-icon-font-megaphone-3914404 1.svg`}
        text='공지사항'
        to='/notice'
      />
      <MenuItem
        img={`https://d2f3kqq80r3o3g.cloudfront.net/free-icon-font-clipboard-list-7857307 1.svg`}
        text='커리큘럼'
        to='/curriculum'
      />
      <MenuItem
        img={`https://d2f3kqq80r3o3g.cloudfront.net/free-icon-font-calendar-3917244 1.svg`}
        text='병가ㆍ공가ㆍ조퇴ㆍ결석 신청'
        to='/leave'
      />
      <MenuItem
        img={`https://d2f3kqq80r3o3g.cloudfront.net/free-icon-font-paper-plane-3917567 2.svg`}
        text='쪽지'
        to='/note'
      />
      <MenuItem
        img={`https://d2f3kqq80r3o3g.cloudfront.net/free-icon-font-sign-out-alt-5528120 1.svg`}
        text='로그아웃'
      />
    </ul>
  );
}

export default MenuList;
