import types from "./types";

export const catReducer = (state = [], action) => {
    switch(action.type) {
        case types.CAT_LIST_SUCCESS: 
            return [...action.payload]
        case types.CAT_SUCCESS:
            return action.payload; 
        default:
            return state;
    }
}