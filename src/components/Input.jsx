import React, { useState } from 'react';
import { StButton } from './Button';

function Input() {
  const initialValue = { name: '', price: 0 };
  const [inputItem, setInputItem] = useState(initialValue);

  const onChangeHandler = e => {
    setInputItem({ ...inputItem, [e.target.id]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    if (!(inputItem.name.trim() && inputItem.price.trim())) {
      alert('이름과 가격을 입력하세요');
      return;
    }

    const newInputItem = {...inputItem};
      
    alert(JSON.stringify(newInputItem));
    setInputItem(initialValue);
  };

  return (
    <div>
      <h1>Input</h1>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor='name'>이름</label>
        <input id='name' value={inputItem.name} onChange={onChangeHandler}></input>
        <label htmlFor='price'>가격</label>
        <input id='price' value={inputItem.price} onChange={onChangeHandler}></input>
        <StButton size='small' primary type='submit'>저장</StButton>
      </form>
    </div>
  );
}

export default Input;
