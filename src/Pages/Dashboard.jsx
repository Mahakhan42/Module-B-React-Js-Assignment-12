import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const navigate = useNavigate();

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editTodo, setEditTodo] = useState('');

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
    // Redirect to the login page
    navigate('/login');
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    setEditingIndex(null);
  };

  const handleEditTodo = (index) => {
    setEditingIndex(index);
    setEditTodo(todos[index]);
  };

  const handleUpdateTodo = () => {
    if (editTodo.trim() !== '') {
      const updatedTodos = [...todos];
      updatedTodos[editingIndex] = editTodo;
      setTodos(updatedTodos);
      setEditingIndex(null);
      setEditTodo('');
    }
  };

  return (
    <div className="text-center text-white">
      <div className="d-flex p-2 m-2"style={{border:'5px solid bisque'}}>
      <h3><b><i> WELCOME TO DASHBOARD</i></b></h3>
      <div className="ms-auto">
      <button onClick={handleLogout} className="btn btn-danger">Logout</button>
      </div>
      </div>
      <div>
      <br /><br /><br /><br />
        <h2><b><u><i>Todo List</i></u></b></h2>
        <br /><br />
        <input className="p-3" type="text"value={newTodo}placeholder="Enter Todo Items..."onChange={(e) => setNewTodo(e.target.value)}
        /> 
&nbsp;&nbsp;&nbsp;
        <button onClick={handleAddTodo} className="btn btn-primary rounded-0 p-3">Add Todo</button>
<br /><br />
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {editingIndex === index ? (
                <>
                  <input className="p-1 m-3 ml-2" type="text" value={editTodo} onChange={(e) => setEditTodo(e.target.value)}
                  />
                  <button onClick={handleUpdateTodo} className="btn-warning p-2">Update</button>
                </>
              ) : (
                <>
                  {todo}&nbsp;&nbsp;
                  <button onClick={() => handleEditTodo(index)}className="btn-success p-2">Edit</button>&nbsp;&nbsp;
                  <button onClick={() => handleDeleteTodo(index)} className="btn-danger p-2">Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
