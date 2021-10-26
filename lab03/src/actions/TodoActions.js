export const TODO_ADD = 'TODO_ADD';
export const TODO_DELETE = 'TODO_DELETE';
export const TODO_EDIT ='TODO_EDIT'

export const addTodoAction = (payload) => ({
    type: TODO_ADD,
    payload
});

export const deleteTodoAction = (payload) => ({
    type: TODO_DELETE,
    payload
});
export const editTodoAction = (payload) => ({
    type: TODO_EDIT,
    payload
})