import { TODO_ADD,TODO_DELETE, TODO_EDIT,TODO_DONE } from "../actions/TodoActions";

export const TodoReducer = (state = [], action) => {
    switch(action.type) {
        case TODO_ADD: 
            return [...state, action.payload];
        case TODO_DELETE:
            return [...state.filter(el => el.id !== action.payload.id)];
        case TODO_EDIT:
            return [...state, [action.payload.id]=action.payload]
        case TODO_DONE:
            if (state.id === action.id){
                return state.map(t => {if(action.payload.id === t.id){return {...t,done: !t.done}} return t})
            }
        default:
            return state;
    }
}
