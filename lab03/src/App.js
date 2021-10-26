import React from 'react';
import './App.css';
import TodoForm from './features/TodoForm';
import TodoList from './features/TodoList';

function App() {
  return (<div>
    <TodoForm/>
    <TodoList/>
  </div>);
}

export default App;
