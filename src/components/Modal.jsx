import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { StButton } from './Button';
import { VscClose } from 'react-icons/vsc';

function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [secShowModal, setSecShowModal] = useState(false);
  const modalRef = useRef();

  const openModalHandler = () => setShowModal(!showModal);
  const openSecModalHandler = () => setSecShowModal(!secShowModal);

  const handleWrapClick = () => setSecShowModal(false);

  // 이벤트 버블링 막기(모달 내부 눌러도 외부영역 까지 전파되지 않게 해서)
  const handleModalClick = e =>  e.stopPropagation();

  return (
    <>
      <h1>Modal</h1>
      <ButtonGroup>
        <StButton primary size='small' onClick={openModalHandler}>
          open modal
        </StButton>
        <StButton negative size='large' onClick={openSecModalHandler}>
          open modal
        </StButton>
      </ButtonGroup>

      {showModal && (
        <Wrap>
          <ModalContainer ref={modalRef} onClick={handleModalClick}>
            <p>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</p>
            <ButtonContainer>
              <StButton negative size='small' onClick={() => setShowModal(false)}>
                닫기
              </StButton>
              <StButton primary size='small'>
                확인
              </StButton>
            </ButtonContainer>
          </ModalContainer>
        </Wrap>
      )}

      {secShowModal && (
        <Wrap onClick={handleWrapClick}>
          <ModalContainer ref={modalRef} onClick={handleModalClick}>
            <p>닫기 버튼 1개가 있고,외부 영역을 누르면 모달이 닫혀요.</p>
            <CloseButton onClick={() => setSecShowModal(false)}>
              <VscClose />
            </CloseButton>
          </ModalContainer>
        </Wrap>
      )}
    </>
  );
}

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  position: relative;
  background-color: white;
  width: 300px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 20px;
  justify-content: flex-end;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export default Modal;
