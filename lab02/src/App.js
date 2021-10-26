import React from 'react';
import './App.css';
import TodoInput from './components/TodoInput.js';
import TodoItem from './components/TodoItem.js';
import {useSelector} from 'react-redux'
import {selectTodoList,selectNoteList} from './features/counter/todoSlice.js'
import NoteInput from './components/NoteInput';
import NoteItem from './components/NoteItem';

function App() {
  const todoList = useSelector(selectTodoList)
  const noteList = useSelector(selectNoteList)
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
      <div className='app__note'>
        <NoteInput/>
        {noteList.map(item =>(
          <NoteItem text={item.text} id={item.id}/>
        ))}
      </div>
    </div>
  );

}

export default App;
