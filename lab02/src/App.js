import React from 'react';
import './App.css';
import TodoInput from './components/TodoInput.js';
import TodoItem from './components/TodoItem.js';
import {useSelector} from 'react-redux'
import {selectTodoList} from './features/counter/todoSlice.js'

function App() {
  const todoList = useSelector(selectTodoList)
  return(
    <div className='app'>
      <div className='app__todo'>
      <TodoInput></TodoInput>
      {todoList.map(item => (
        <TodoItem
        name={item.item}
        done={item.done}
        id={item.id}
        editing={item.editing}
        />
      ))}
      
      </div>
    </div>
  );

}

export default App;
