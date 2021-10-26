import React from 'react'
import { NOTE_DELETE } from '../features/counter/todoSlice'
import { useDispatch } from 'react-redux'
export default function NoteItem({text,id}) {
    const dispatch = useDispatch()
    const handleClick=()=>{
        dispatch(NOTE_DELETE(id))
    }
    return (
        <div className='noteItem'>
            <p>{text}</p>
            <div onClick={handleClick}>X</div>
        </div>
    )
}
