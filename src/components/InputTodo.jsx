import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const InputTodo = ({ addTodo, value, handleChange }) => (
  <div className="inputContainer">
    <input className="input" type="text" id="todoInput" value={value} onChange={handleChange} />
    <FontAwesomeIcon icon={solid('plus')} color="green" onClick={addTodo} />
  </div>
);

export default InputTodo;
