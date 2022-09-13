import React from 'react';
import TodoItem from './TodoItem';

const TodosList = ({
  todoArr,
  handleTodoCompleted,
  handleDelete, handleEdit, edit, clicked, value, handleChange, handleUpdate,
}) => {
  const todos = todoArr.map((todo) => (
    <TodoItem
      key={todo.id}
      id={todo.id}
      title={todo.title}
      completed={todo.completed}
      handleTodoCompleted={handleTodoCompleted}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      edit={edit}
      clicked={clicked}
      value={value}
      handleChange={handleChange}
      handleUpdate={handleUpdate}
    />
  ));
  return (
    <div className="todosList">
      {todos}
    </div>
  );
};

export default TodosList;
