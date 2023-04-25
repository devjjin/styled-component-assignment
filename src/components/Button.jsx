import React from 'react';
import styled, { css } from 'styled-components';
import { VscChevronRight, VscBellDot } from 'react-icons/vsc';

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

const styles = {
  primary: {
    border: '2px solid #7FFFD4',
    backgroundColor: '#7FFFD4',
  },
  negative: {
    color: '#d63031',
    border: '2px solid #fab1a0',
    backgroundColor: '#fab1a0',
  },
};

function Button() {
  const iconTheme = (type) => type === 'primary' ? <VscChevronRight /> : type === 'negative' ? <VscBellDot /> : '';

  const primaryClick  = () => alert('버튼을 만들어 보세요');
  const negativeClick = () => prompt('어렵나요?');

  return (
    <>
      <h1>Button</h1>
      <ButtonContainer>
        <StButton size='large' primary onClick={primaryClick}>Large Primary Button{iconTheme('primary') }</StButton>
        <StButton size='medium' primary>Medium </StButton>
        <StButton size='small' primary>Small</StButton>
      </ButtonContainer>
      {/* Negative */}
      <ButtonContainer>
        <StButton size='large' negative onClick={negativeClick }>Large Negative Button{iconTheme('negative')}</StButton>
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

export const StButton = styled.button`
  // 공통
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  border-radius: 10px;
  cursor: pointer;
  &:active { filter: brightness(0.9); }
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
      background-color: ${size !== 'large' ? backgroundColor : '#FFFFFF'};
    `;
  }}
  
`;

export default Button;
