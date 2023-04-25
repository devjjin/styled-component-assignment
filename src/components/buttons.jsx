import React from 'react';
import styled, { css } from 'styled-components';

const sizes = {
  large: {
    width: '250px',
    height: '60px',
    fontWeight: 'bold',
  },
  medium: {
    width: '160px',
    height: '50px',
  },
  small: {
    width: '120px',
    height: '40px',
  },
};

const styles = {
  primary: {
    border: '2px solid #7FFFD4',
    backgroundColor: '#7FFFD4',
  },
  negative: {
    color: '#ff0000',
    border: '2px solid #fab1a0',
    backgroundColor: '#fab1a0',
  },
};

function Button() {
  return (
    <>
      <h1>Button</h1>
      <ButtonContainer>
        <StButton size='large' primary>Large Primary Button</StButton>
        <StButton size='medium' primary>Medium </StButton>
        <StButton size='small' primary>Small</StButton>
      </ButtonContainer>
      {/* Negative */}
      <ButtonContainer>
        <StButton size='large' negative>Large Negative Button</StButton>
        <StButton size='medium' negative>Medium</StButton>
        <StButton size='small' negative>Small</StButton>
      </ButtonContainer>
    </>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
  gap: 10px;
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
  
  ${({ primary, negative, size }) => {
    const style = primary ? styles.primary : negative ? styles.negative : {};
    const { color, border, backgroundColor } = style;
    return css`
      color: ${color};
      border: ${border};
      background-color: ${size !== 'large' ? backgroundColor : 'transparent'};
    `;
  }}
`;

export default Button;
