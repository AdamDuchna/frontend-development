import { TODO_ADD,TODO_DELETE, TODO_EDIT,TODO_DONE,TODO_UPDATE } from "../actions/TodoActions";

export const TodoReducer = (state = [], action) => {
    switch(action.type) {
        case TODO_ADD: 
            return [...state, action.payload];
        case TODO_DELETE:
            return [...state.filter(el => el.id !== action.payload.id)];
        case TODO_EDIT:
            return state.map(t => {if(action.payload.id === t.id){return {...t,editing: !t.editing}} return t})
        case TODO_DONE:
            return state.map(t => {if(action.payload.id === t.id){return {...t,done: !t.done,date: Date()}} return t})
        case TODO_UPDATE:
            return state.map(t => {if (action.payload.id === t.id) { return {...t,text: action.payload.note}} return t})
        default:
            return state;
    }
}
