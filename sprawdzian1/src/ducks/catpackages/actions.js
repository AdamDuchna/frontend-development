export const CAT_ADD = 'CAT_ADD'
export const CAT_DEL = 'CAT_DEL'
export const CAT_EDIT = 'CAT_EDIT'

export const addCatAction = (payload) => ({
    type: CAT_ADD,
    payload
});
export const delCatAction = (payload) => ({
    type: CAT_DEL,
    payload
});
export const editCatAction = (payload) => ({
    type: CAT_EDIT,
    payload
});