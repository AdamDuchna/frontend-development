import types from "./types";

export const userReducer = (state = [], action) => {
    switch(action.type) {
        case types.USER_LIST_SUCCESS: 
            return [...action.payload]
        case types.USER_SUCCESS:
            return action.payload; 
        default:
            return state;
    }
}