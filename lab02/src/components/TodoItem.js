import React from 'react'
import './TodoItem.css'
import Checkbox from '@material-ui/core/Checkbox'
import { useDispatch } from 'react-redux'
import { TODO_DELETE, TODO_FINISH,TODO_EDIT, TODO_SET_EDITING } from '../features/counter/todoSlice'
import { useState } from 'react'

const TodoItem = ({name,done,id,editing}) => {
    const [input,setInput] = useState(name)
    const dispatch = useDispatch()
    const handleCheck=()=>{
        dispatch(TODO_FINISH(id))
    }
    const handleClick=()=>{
        dispatch(TODO_DELETE(id))
    }
    const handleEdit=()=>{
        dispatch(TODO_SET_EDITING(id))  
    }
    const submitEdit=()=>{
        dispatch(TODO_SET_EDITING(id))
        dispatch(TODO_EDIT(input,id))
    }
    return (
        <div className='todoItem'>
            {editing ? <div className="editField"><input   
            type="text" 
            value={input} 
            onChange={e=>setInput(e.target.value)}>
            </input>
            <p onClick={submitEdit}>V</p></div>:<p onClick={handleEdit}>{input}</p>}
            <Checkbox
            checked={done}
            color="primary"
            onChange={handleCheck}
            inputProps={{'aria-label': 'secondary checkbox'}}/>
            <div onClick={handleClick}>X</div>
        </div>
    )
}

export default TodoItem
