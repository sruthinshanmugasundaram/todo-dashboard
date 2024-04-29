// Netflix.js

import React, { useState, useEffect } from 'react';
import { fetchTodosFromApi, createTodo, updateTodo, deleteTodo } from '../pages/customTodoApi'; // Correct the import path
import Todo from '../components/Todo';
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from 'react-router-dom';
import './Netflix.css';

const Netflix = () => {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newTodoData, setNewTodoData] = useState({
    title: '',
    description: ''
  });

  useEffect(() => {
    fetchTodos();
    checkAuth();
  }, []);

  const fetchTodos = async () => {
    try {
      const data = await fetchTodosFromApi(); // Fetch todos from API
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (!currentUser) navigate("/Delete");
    });

    return () => unsubscribe();
  }, [navigate]);

  const checkAuth = () => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
        navigate('/login');
      }
    });
    return unsubscribe;
  };

  const handleSignOut = () => {
    signOut(firebaseAuth)
      .then(() => {
        setCurrentUser(null);
        navigate("/login");
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  const handleCreateTodo = async () => {
    try {
      const createdTodo = await createTodo(newTodoData);
      setTodos([...todos, createdTodo]);
      setNewTodoData({ title: '', description: '' });
      setShowCreateForm(false);
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  const handleUpdateTodo = async (id, updatedTodo) => {
    try {
      const updated = await updateTodo(id, updatedTodo);
      setTodos(todos.map(todo => (todo.id === id ? updated : todo)));
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Todo Dashboard</h1>
        <div className="buttons">
          <button onClick={handleSignOut}>Sign Out</button>
          <button onClick={() => setShowCreateForm(true)}>Create Todo</button>
        </div>
      </div>
      <div className="todo-list">
        {todos.map(todo => (
          <div key={todo.id} className="todo-container">
            <Todo todo={todo} onUpdateTodo={handleUpdateTodo} onDeleteTodo={handleDeleteTodo} />
          </div>
        ))}
      </div>
      {showCreateForm && (
        <div className="create-form">
          <h2>Create New Todo</h2>
          <input
            type="text"
            placeholder="Title"
            value={newTodoData.title}
            onChange={e => setNewTodoData({ ...newTodoData, title: e.target.value })}
          />
          <textarea
            placeholder="Description"
            value={newTodoData.description}
            onChange={e => setNewTodoData({ ...newTodoData, description: e.target.value })}
          />
          <button onClick={handleCreateTodo}>Create Todo</button>
          <button onClick={() => setShowCreateForm(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Netflix;
