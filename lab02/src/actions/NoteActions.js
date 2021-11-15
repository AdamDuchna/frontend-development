export const NOTE_ADD = 'NOTE_ADD';
export const NOTE_DELETE = 'NOTE_DELETE';

export const addNoteAction = (payload) => ({
    type: NOTE_ADD,
    payload
});

export const deleteNoteAction = (payload) => ({
    type: NOTE_DELETE,
    payload
});



