import { INCREMENT,DECREMENT } from "../actions/ClickerAction";

export const ClickerReducer = (state = 0, action) => {
    switch(action.type) {
        case INCREMENT:
            return state+1 
        case DECREMENT:
            return state-1
        default:
            return state;
    }
}
