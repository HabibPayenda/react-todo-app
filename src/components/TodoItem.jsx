/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import '../App.css';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

const TodoItem = ({
  id,
  title,
  completed,
  handleTodoCompleted,
  handleDelete,
  handleEdit,
  edit,
  clicked,
  value,
  handleChange,
  handleUpdate,
}) => {
  const checked = completed ? 'checked' : '';
  if (edit && clicked === id) {
    return (
      <div id={id} className="todoItem">
        <input type="checkbox" checked={completed} onChange={() => handleTodoCompleted(id)} />
        <input className="input" type="text" value={value} onChange={handleChange} />
        <FontAwesomeIcon icon={solid('check')} color="green" onClick={() => handleUpdate(id)} />
      </div>
    );
  }
  return (
    <div id={id} className="todoItem">
      <input type="checkbox" checked={completed} onChange={() => handleTodoCompleted(id)} />
      <p onClick={() => handleEdit(id, title)} className={`todoText ${checked}`}>
        {title}
      </p>
      <FontAwesomeIcon icon={solid('trash')} color="red" onClick={() => handleDelete(id)} />
    </div>
  );
};

export default TodoItem;
