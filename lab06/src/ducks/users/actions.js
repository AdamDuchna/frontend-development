import types from './types';

export const userListAction = (users) => ({
    type: types.USER_LIST,
    payload: users
});


export const userGetAction = (user) => ({
    type: types.USER,
    payload: user
});
