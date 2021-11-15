import React from 'react';
import './App.css';
import TodoForm from './features/TodoForm';
import TodoList from './features/TodoList';
import TodoDetail from './features/TodoDetail';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NoteForm from './features/NoteForm';
import NoteList from './features/NoteList';
import NoteDetail from './features/NoteDetail';

function App() {
  return (<div>
    <Router>
      <Routes>
        <Route exact path="todos/" element={<><TodoForm/><TodoList/></>}></Route>
        <Route exact path="notes/" element={<><NoteForm/><NoteList/></>}></Route>
        <Route path="/notes/:id" element={<NoteDetail/>}></Route>
        <Route path="/todos/:id" element={<TodoDetail/>}></Route>
      </Routes>
    </Router>
  </div>);
}

export default App;
