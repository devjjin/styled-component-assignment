import React from 'react';
import styled, { css } from 'styled-components';

const sizes = {
  large: {
    width: '200px',
    height: '50px',
    fontWeight: 'bold',
  },
  medium: {
    width: '130px',
    height: '45px',
  },
  small: {
    width: '100px',
    height: '40px',
  },
};

function Button() {
  return (
    <>
      <h1>Button</h1>
      <ButtonContainer>
        <StButton size='large'>Large Primary Button</StButton>
        <StButton size='medium'>Medium </StButton>
        <StButton size='small'>Small</StButton>
      </ButtonContainer>
      {/* Negative */}
      <ButtonContainer>
        <StButton size='large'>Large Negative Button</StButton>
        <StButton size='medium'>Medium</StButton>
        <StButton size='small'>Small</StButton>
      </ButtonContainer>
    </>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
  gap: 10px;
  color: black;
`;

const StButton = styled.button`
  // 공통
  font-weight: normal;
  border-radius: 10px;
  cursor: pointer;

  //sizes 객체에서 가져오기
  ${({ size }) => {
    const { height, width, fontWeight } = sizes[size];
    return css`
      height: ${height};
      width: ${width};
      font-weight: ${fontWeight};
    `;
  }}
`;

export default Button;
