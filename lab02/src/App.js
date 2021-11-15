import React from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return(
    <div className="app">
      <div className="todos">
        <TodoForm/>
        <TodoList/>
      </div>
      <div className="notes">
        <NoteForm/>
        <NoteList/>
      </div>
    </div>
  );

}

export default App;
