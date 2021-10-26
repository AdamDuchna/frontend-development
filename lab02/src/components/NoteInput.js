import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NOTE_ADD } from '../features/counter/todoSlice'
import './NoteItem.css' 
export default function NoteInput() {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()
    const addNote = () => {
        dispatch(NOTE_ADD({
            text: input,
            id: Date.now(),
        }))
        

    }
    return (
        <div className='input'>
            <input type="text" value={input} onChange={e=>setInput(e.target.value)}></input>
            <button onClick={addNote}>Add Note</button>
        </div>
    )
}