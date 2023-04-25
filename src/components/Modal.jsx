import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { StButton } from './Button';
import { VscClose }  from 'react-icons/vsc';

function Modal() {
    const [showModal, setShowModal] = useState(false);
    const [secShowModal, setSecShowModal] = useState(false);
    const modalRef = useRef();
  
    const openModalHandler = () => setShowModal(!showModal);
    const openSecModalHandler = () => setSecShowModal(!secShowModal);
  
    const handleModalClick = e => {
      if (modalRef.current === e.target) {
          return;
        }
        setSecShowModal(false);
    };
  
    return (
      <>
        <h1>Modal</h1>
        <ButtonGrop>
          <StButton primary size='small' onClick={openModalHandler}>
            open modal
          </StButton>
          <StButton negative size='large' onClick={openSecModalHandler}>
            open modal
          </StButton>
        </ButtonGrop>
  
        {showModal && (
          <Wrap ref={modalRef} onClick={handleModalClick}>
            <ModalContainer>
              <p>
                닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
              </p>
              <ButtonContainer>
                <StButton negative size='small' onClick={openModalHandler}>
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
          <Wrap>
            <ModalContainer>
              <StCloseButton>
                <VscClose onClick={() => setSecShowModal(false)} />
              </StCloseButton>
              <p>닫기 버튼 1개가 있고,외부 영역을 누르면 모달이 닫혀요.</p>
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
  height: 150px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
`;

const ButtonGrop = styled.div`
  display: flex;
  gap: 10px;
`;
const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 5px;
  margin-top: 20px;
  bottom: 10px;
  right: 10px;
  /* justify-content: flex-end; */
  /* align-items: flex-end; */
`;

const StCloseButton = styled.div`
    display: flex;
    justify-content: flex-end;
`


export default Modal;
