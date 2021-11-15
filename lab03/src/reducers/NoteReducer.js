import { NOTE_ADD,NOTE_DELETE, NOTE_EDIT,NOTE_UPDATE } from "../actions/NoteActions";

export const NoteReducer = (state = [], action) => {
    switch(action.type) {
        case NOTE_ADD: 
            return [...state, action.payload];
        case NOTE_DELETE:
            return [...state.filter(el => el.id !== action.payload.id)];
        case NOTE_EDIT:
            return state.map(t => {if(action.payload.id === t.id){return {...t,editing: !t.editing}} return t})
        case NOTE_UPDATE:
            return state.map(t => {if (action.payload.id === t.id) { return {...t,text: action.payload.note}}})
        default:
            return state;
    }
}
