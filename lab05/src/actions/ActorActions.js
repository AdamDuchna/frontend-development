export const ACTOR_ADD = 'ACTOR_ADD';
export const ACTOR_ADD_MOVIE = 'ACTOR_ADD_MOVIE';
export const ACTOR_DEL_MOVIE = 'ACTOR_DEL_MOVIE';

export const addActorAction = (payload) => ({
    type: ACTOR_ADD,
    payload
});
export const addMovieActorAction = (payload) => ({
    type: ACTOR_ADD_MOVIE,
    payload
});
export const delMovieActorAction = (payload) => ({
    type: ACTOR_ADD_MOVIE,
    payload
});



