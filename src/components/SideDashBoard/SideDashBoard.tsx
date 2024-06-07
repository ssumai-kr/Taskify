import styles from './SideDashBoard.module.scss';
import ColorDot from '../chip/ColorCircle/ColorDot';
import CrownImg from '/icon/crown.svg';
import { DashboardContext } from '../../contexts/DashboardContext';
import { useContext } from 'react';

/*
사이드 바에 대시보드 컴포넌트입니다.
각 대시보드의 색, 타이틀, 본인제작여부, dashboardId, context 데이터 변경 함수가
props로 내려집니다.

선택된 대시보드는 배경색이 적용됩니다.
*/

interface SideDashBoardProps {
  color: string;
  title: string;
  createdByMe: boolean;
  selectedId: number;
  onClick: () => void;
}

function SideDashBoard({
  color,
  title,
  createdByMe,
  selectedId,
  onClick,
}: SideDashBoardProps) {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('반드시 DashboardProvider 안에서 사용해야 합니다.');
  }
  const { activeDashboard } = context;
  const Selected = selectedId === activeDashboard;
  return (
    <div
      className={`${styles.SideDashBoard} ${Selected ? styles.selected : ''}`}
      onClick={onClick}
    >
      <ColorDot color={color} />
      <span className={styles.Title}>{title}</span>
      {createdByMe && (
        <img
          src={CrownImg}
          alt="관리자 표시 이미지"
          className={styles.CrownImg}
        />
      )}
    </div>
  );
}

export default SideDashBoard;
