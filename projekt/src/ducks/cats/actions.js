import types from './types';

export const catListAction = (users) => ({
    type: types.CAT_LIST,
    payload: users
});

