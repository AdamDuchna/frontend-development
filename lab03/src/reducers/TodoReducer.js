import { TODO_ADD,TODO_DELETE, TODO_EDIT } from "../actions/TodoActions";

export const TodoReducer = (state = [], action) => {
    switch(action.type) {
        case TODO_ADD: 
            return [...state, action.payload];
        case TODO_DELETE:
            return [...state.filter(el => el.id !== action.payload.id)];
        case TODO_EDIT:
            return [...state,]
        default:
            return state;
    }
}
