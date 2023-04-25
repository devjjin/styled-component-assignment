import React, { useState } from 'react';
import { StButton } from './Button';

function Input() {
  const initialValues = { name: '', price: '' };
  const [inputValues, setInputValues] = useState(initialValues);

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

    if (!inputValues.name.trim() || !inputValues.price.trim()) {
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
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="name">이름</label>
        <input id="name" value={inputValues.name} onChange={onChangeHandler} />
        <label htmlFor="price">가격</label>
        <input id="price" value={addComma(inputValues.price)} type="text" onChange={onChangeHandler} placeholder='0' />
        <StButton size="small" primary type="submit">
          저장
        </StButton>
      </form>
    </div>
  );
}

export default Input;
