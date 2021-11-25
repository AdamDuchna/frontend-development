export const DIRECTOR_ADD = 'DIRECTOR_ADD';
export const DIRECTOR_UPDATE = 'DIRECTOR_UPDATE';

export const addDirectorAction = (payload) => ({
    type: DIRECTOR_ADD,
    payload
});
export const updateDirectorAction = (payload) => ({
    type: DIRECTOR_UPDATE,
    payload
});



