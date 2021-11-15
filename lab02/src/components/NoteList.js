import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction } from "../actions/NoteActions";
const NoteList = (props) => {
    const dispatch = useDispatch();
    const notes = useSelector((state) => state.notes);
    return (
        <div>
            {notes.map(note => (<div key={note.id}>{note.text} <button onClick={() => dispatch(deleteNoteAction(note))}>Usuń</button></div>))}
        </div>
    )
};


export default NoteList;