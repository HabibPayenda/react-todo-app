import React from 'react';
import propTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const InputTodo = ({ addTodo, value, handleChange }) => (
  <div className="inputContainer">
    <input className="input" type="text" id="todoInput" value={value} onChange={handleChange} />
    <FontAwesomeIcon icon={solid('plus')} color="green" onClick={addTodo} />
  </div>
);

InputTodo.propTypes = {
  value: propTypes.string.isRequired,
  addTodo: propTypes.func.isRequired,
  handleChange: propTypes.func.isRequired,
};

export default InputTodo;
