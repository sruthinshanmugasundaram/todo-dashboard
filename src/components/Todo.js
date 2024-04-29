// Todo.js

import React from 'react';

const Todo = ({ todo, onUpdateTodo, onDeleteTodo }) => {
  const handleUpdate = () => {
    // Implement logic to update the todo
    onUpdateTodo(todo.id, { ...todo, completed: !todo.completed });
  };

  const handleDelete = () => {
    // Implement logic to delete the todo
    onDeleteTodo(todo.id);
  };

  return (
    <div className="todo">
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <button onClick={handleUpdate}>{todo.completed ? 'Mark Incomplete' : 'Mark Complete'}</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Todo;
