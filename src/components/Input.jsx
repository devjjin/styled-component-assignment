import React, { useState } from 'react';
import { StButton } from './Button';
import styled from 'styled-components';

function Input() {
  const initialValues = { name: '', price: '' };
  const [inputValues, setInputValues] = useState(initialValues);
  const { name, price } = inputValues;
  
  // 천단위 표현 정규식
  const addComma = price => {
    const returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return returnString;
  };

  const onChangeHandler = e => {
    const { id, value } = e.target;

    if (id === 'price') {
      const regex = /^[0-9,]+$/; // 숫자와 쉼표만 입력되었는지 검증
      if (!regex.test(value)) return;

      const str = value.replaceAll(',', '');
      setInputValues({ ...inputValues, price: str });
    } else {
      setInputValues({ ...inputValues, [id]: value });
    }
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    if (!name.trim() || !price.trim()) {
      alert('이름과 가격을 입력하세요');
      return;
    }

    const newInputValues = { ...inputValues };
    alert(JSON.stringify(newInputValues));
    setInputValues(initialValues);
  };

  return (
    <div>
      <h1>Input</h1>
      <Form onSubmit={onSubmitHandler}>
        <label htmlFor='name'>이름</label>
        <StInput
          id='name'
          value={name}
          onChange={onChangeHandler}
        />
        <label htmlFor='price'>가격</label>
        <StInput
          id='price'
          value={addComma(price)}
          type='text'
          onChange={onChangeHandler}
          placeholder=''
        />
        <StButton size='small' primary type='submit'> 저장 </StButton>
      </Form>
    </div>
  );
}

const Form = styled.form`
  display: flex;
  align-items: center;
`

const StInput = styled.input`
  width: 200px;
  height: 25px;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid black;
`
export default Input;
