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

function App() {
  return (<div>
    <Router>
      <TodoForm/>
      <TodoList/>
      <Routes>
        <Route path=":id" component={TodoDetail}></Route>
      </Routes>
    </Router>
  </div>);
}

export default App;
