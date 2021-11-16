import { DIRECTOR_ADD,DIRECTOR_UPDATE } from "../actions/DirectorActions";

export const DirectorReducer = (state = [], action) => {
    switch(action.type) {
        case DIRECTOR_ADD: 
            return [...state, action.payload];
        case DIRECTOR_UPDATE:
            return state.map(t => {if (action.payload.id === t.id) { return {...action.payload} } return t})
        default:
            return state;
    }
}
