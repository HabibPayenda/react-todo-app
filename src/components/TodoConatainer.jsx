/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

const initialTodos = [
  {
    id: 1,
    title: 'Setup development environment',
    completed: true,
  },
  {
    id: 2,
    title: 'Develop website and add content',
    completed: false,
  },
  {
    id: 3,
    title: 'Deploy to live server',
    completed: false,
  },
];

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');
  const [editVale, setEditValue] = useState('');
  const [edit, setEdit] = useState(false);
  const [clicked, setClicked] = useState(null);

  const handleAddTodo = () => {
    const trimed = value.trim();
    if (trimed !== '') {
      const { length } = todos;
      const newTodo = {
        id: length + 1,
        title: value,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setValue('');
    } else {
      // eslint-disable-next-line no-alert
      alert('Please provide a valide title!');
      setValue('');
    }
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleChangeEdit = (event) => {
    setEditValue(event.target.value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleEdit = (id, title) => {
    setEditValue(title);
    setEdit(true);
    setClicked(id);
  };

  const handleUpdate = (id) => {
    const toBeUpdated = todos.filter((todo) => todo.id === id);
    const [editTodo] = toBeUpdated;
    editTodo.title = editVale;
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        // eslint-disable-next-line no-param-reassign
        todo.value = editTodo;
        return todo;
      }
      return todo;
    });
    setTodos(newTodos);
    setEdit(false);
  };

  const handleTodoCompleted = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        const changed = { ...todo, completed: !todo.completed };
        return changed;
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <div className="todoContainer">
      <h1>Todos</h1>
      <InputTodo value={value} handleChange={handleChange} addTodo={handleAddTodo} />
      <TodosList
        todoArr={todos}
        handleEdit={handleEdit}
        handleTodoCompleted={handleTodoCompleted}
        handleDelete={handleDeleteTodo}
        edit={edit}
        clicked={clicked}
        value={editVale}
        handleChange={handleChangeEdit}
        handleUpdate={handleUpdate}
      />
    </div>

  );
};
export default TodoContainer;
