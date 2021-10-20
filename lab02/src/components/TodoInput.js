import React from 'react'
import './TodoInput.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TODO_ADD } from '../features/counter/todoSlice'
const TodoInput= () => {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()

    const addTodo = () => {
        dispatch(TODO_ADD({
            item: input,
            done: false,
            id: Date.now(),
            editing: false
        }))
    }
    return(
        <div className='input'>
            <input type="text" value={input} onChange={e=>setInput(e.target.value)}></input>
            <button onClick={addTodo}>+</button>
        </div>
    )
}
export default TodoInput;