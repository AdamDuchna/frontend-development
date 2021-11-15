import { NOTE_ADD,NOTE_DELETE} from "../actions/NoteActions";

export const NoteReducer = (state = [], action) => {
    switch(action.type) {
        case NOTE_ADD: 
            return [...state, action.payload];
        case NOTE_DELETE:
            return [...state.filter(el => el.id !== action.payload.id)];
        default:
            return state;
    }
}
