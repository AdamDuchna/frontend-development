import { connect } from "react-redux";
import { deleteNoteAction,editNoteAction,updateNoteAction } from "../actions/NoteActions";
import './TodoList.css' 
import {Link} from "react-router-dom";
import { useEffect,useState } from "react";

const NoteList = ({ notes, deleteNoteAction,editNoteAction,updateNoteAction },props) => {
    const [note,setNote]  = useState("")
    console.log(notes)
    const handleEdit=(el)=>{
        if(el.editing){updateNoteAction({"id":el.id,"note":note})}
        editNoteAction(el)
    }
    return (
        <div>
            {notes.map(note => ( <div className="note" key={note.id}>{note.editing ? <input 
            value={note} 
            onChange={e=>setNote(e.target.value)}></input>
                : <Link to={`/notes/${note.id}`} style={{ textDecoration: 'none', color: "black" }}>{note.text} </Link>
                }
                <button onClick={() => handleEdit(note)}>Edit</button>
                <button onClick={() => deleteNoteAction(note)}>Usuń</button>
                </div>))}
        </div>
    )
};

const mapStateToProps = (state,props) => {
    return {
        notes: state.notes
    };
}

const mapDispatchToProps = {
    deleteNoteAction,
    editNoteAction,
    updateNoteAction
}


export default connect(mapStateToProps, mapDispatchToProps)(NoteList);