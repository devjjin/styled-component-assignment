import React, { useState } from 'react';
import styled from 'styled-components';

function Select() {
  const [option, setOption] = useState('');

  const options = [
    { id: 1, value: '리액트' },
    { id: 2, value: '자바' },
    { id: 3, value: '스프링' },
    { id: 4, value: '리액트네이티브' },
  ];

  const selectHandler = e => setOption(e.target.value);

  return (
    <div>
      <Wrap>
        <h1>Select</h1>
        <StSelect value={option} onChange={selectHandler}>
          {options.map(option => (
            <option key={option.id} value={option.value}>
              {option.value}
            </option>
          ))}
        </StSelect>
      </Wrap>
    </div>
  );
}

const Wrap = styled.div`
  margin-top: 15px;
  width: 500px;
  height: 150px;
  border: 3px solid #d3d3d3;
  overflow: hidden;
  padding: 10px;
`;

const StSelect = styled.select`
  padding: 0 10px;
  width: 250px;
  height: 30px;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid #d3d3d3;
`;

export default Select;
