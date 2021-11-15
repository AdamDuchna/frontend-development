export const NOTE_ADD = 'NOTE_ADD';
export const NOTE_DELETE = 'NOTE_DELETE';
export const NOTE_EDIT ='NOTE_EDIT'
export const NOTE_UPDATE ='NOTE_UPDATE'

export const addNoteAction = (payload) => ({
    type: NOTE_ADD,
    payload
});

export const deleteNoteAction = (payload) => ({
    type: NOTE_DELETE,
    payload
});
export const editNoteAction = (payload) => ({
    type: NOTE_EDIT,
    payload
})
export const updateNoteAction = (payload) => ({
    type: NOTE_UPDATE,
    payload
})


