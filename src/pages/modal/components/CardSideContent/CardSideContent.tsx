import styles from './CardSideContent.module.scss';

interface ModalProps {
  managerImg: string;
  manager: string;
  dueDate: string;
}

function CardSideContent({ managerImg, manager, dueDate }: ModalProps) {
  return (
    <div className={styles.sideContent}>
      <div className={styles.managerBlock}>
        <h3>담당자</h3>
        <div className={styles.profileBlock}>
          <img className={styles.profile} src={managerImg} alt="테스트 이미지" />
          <span>{manager}</span>
        </div>
      </div>
      <div className={styles.dateBlock}>
        <h3>마감일</h3>
        <span>{dueDate}</span>
      </div>
    </div>
  );
}

export default CardSideContent;
