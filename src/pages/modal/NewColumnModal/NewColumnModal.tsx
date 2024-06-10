import { useCallback, useState } from 'react';
import ModalContainer from '../ModalContainer/ModalContainer';
import { DeleteBtn, ChangeAndSaveBtn } from '../../../components/Btn/Btn';
import styles from './NewColumnModal.module.scss';

/*
  컬럼을 생성하는 모달입니다.
*/

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  dashboardId: number;
}

function NewColumnModal({ isOpen, setIsOpen, dashboardId }: ModalProps) {
  const [inputValue, setInputValue] = useState('');

  // 모달 닫기
  const close = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  // 새로운 컬럼 생성 동작
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className={styles.container}>
        <h1>새 컬럼 생성</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.content}>
            <label htmlFor="name">이름</label>
            <input
              className={styles.inputText}
              type="text"
              id="name"
              name="name"
              placeholder="이름을 입력해 주세요"
              required
              onChange={handleChange}
            />
            {/* <div className={styles.errorMessage}>중복된 컬럼 이름입니다.</div> */}
          </div>

          <div className={styles.buttonBlock}>
            <DeleteBtn BtnText="취소" handleBtn={close} />
            {
                inputValue.length !== 0 ? (
                  <ChangeAndSaveBtn
                    BtnText="생성"
                    handleBtn={close}
                  />
                ) : (
                  <button className={styles.inactiveButton} type="button" disabled>변경</button>
                )
              }
          </div>
        </form>
      </div>
    </ModalContainer>
  );
}

export default NewColumnModal;
