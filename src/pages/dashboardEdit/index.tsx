import EmailEdit from './MemberEdit/EmailEdit';
import MemberEdit from './MemberEdit/MemberEdit';
import NameEdit from './NameEdit/NameEdit';
import styles from './index.module.scss';

/*  대시보드 수정 페이지
    - 전체적인 레이아웃  */

function DashboardEdit() {
  return (
    <div className={styles.container}>
      <div>sidemenu</div>
      <div>
        <div>header</div>
        <div className={styles.mainContents}>
          <div>돌아가기</div>
          <NameEdit />
          <MemberEdit />
          <EmailEdit />
          <button className={styles.removeButton} type="button">
            대시보드 삭제하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardEdit;
