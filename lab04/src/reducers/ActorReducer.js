import { ACTOR_ADD,ACTOR_DEL_MOVIE,ACTOR_ADD_MOVIE } from "../actions/ActorActions";

export const ActorReducer = (state = [], action) => {
    switch(action.type) {
        case ACTOR_ADD: 
            return [...state, action.payload];
        case ACTOR_ADD_MOVIE: 
            return state.map(t => {if (action.payload.id === t.id) { return {...t,movies: [...t.movies,action.payload.movie]} } return t})
        default:
            return state;
    }
}
