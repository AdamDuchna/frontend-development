export const MOVIE_ADD = 'MOVIE_ADD';
export const MOVIE_DELETE = 'MOVIE_DELETE';
export const MOVIE_UPDATE = 'MOVIE_UPDATE';
export const MOVIE_ADD_ACTOR = 'MOVIE_ADD_ACTOR ';

export const addMovieAction = (payload) => ({
    type: MOVIE_ADD,
    payload
});

export const deleteMovieAction = (payload) => ({
    type: MOVIE_DELETE,
    payload
});

export const editMovieDirectorAction = (payload) => ({
    type: MOVIE_UPDATE,
    payload
});
export const addActorMovieAction = (payload) => ({
    type: MOVIE_ADD_ACTOR,
    payload
});




