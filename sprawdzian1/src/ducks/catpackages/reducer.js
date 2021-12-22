import {CAT_ADD,CAT_DEL,CAT_EDIT} from './actions.js'


export const CatReducer = (state = [], action) => {
    switch(action.type) {
        case CAT_ADD: 
            return [...state, action.payload];
        case CAT_DEL:
            return [...state.filter(el => el.id !== action.payload.id)];
        case CAT_EDIT:
            return state.map(t => {if (action.payload.id === t.id) { return action.payload} return t})
        default:
            return state;
    }
}