import { MOVIE_ADD,MOVIE_DELETE, MOVIE_UPDATE } from "../actions/MovieActions";

export const MovieReducer = (state = [], action) => {
    switch(action.type) {
        case MOVIE_ADD: 
            return [...state, action.payload];
        case MOVIE_DELETE:
            return [...state.filter(el => el.id !== action.payload.id)];
        case MOVIE_UPDATE:
            return state.map(t => {if (action.payload.movieid === t.id) { return {...t,directorid: action.payload.dirid} } return t})
        default:
            return state;
    }
}
