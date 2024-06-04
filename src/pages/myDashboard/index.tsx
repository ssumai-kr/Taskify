import DashboardList from './components/DashboardList/DashboardList';
import Invited from './components/Invited/Invited';
import styles from './index.module.scss';

/*  나의 대시보드 페이지
    - 전체적인 레이아웃  */

function MyDashboard() {
  return (
    <div className={styles.container}>
      <div>sidemenu</div>
      <div>
        <div>header</div>
        <div>
          <DashboardList />
          <Invited />
        </div>
      </div>
    </div>
  );
}

export default MyDashboard;