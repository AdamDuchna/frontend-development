import { createSlice } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';

const initialState = {
    todoList: [],
    noteList: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        TODO_ADD: (state,action) => {
            state.todoList.push(action.payload)
        },
        TODO_FINISH: (state,action) => {
            state.todoList.map(item=>{
                if (action.payload === item.id) {
                    if (item.done === true){item.done = false}
                    else{item.done = true}
                }
            })
        },
        TODO_DELETE: (state, action) => ({
            ...state,
            todoList: state.todoList.filter(item => item.id !== action.payload)
        }),
        TODO_EDIT: (state, action) =>{
            state.todoList.map(item=>{
                if (action.payload.id === item.id) { item.name = action.payload.input}
            })
        },
        TODO_SET_EDITING: (state,action) => {
            state.todoList.map(item=>{
                if (action.payload === item.id) {
                    if (item.editing === true){item.editing = false}
                    else{item.editing = true}
                }
            })
        },
        NOTE_ADD: (state,action) =>{
            state.noteList.push(action.payload)
        },
        NOTE_DELETE: (state,action) =>({
            ...state,
            noteList: state.noteList.filter(item => item.id !== action.payload)
        })
    }
});


export const { TODO_ADD, TODO_FINISH ,TODO_DELETE, TODO_EDIT, TODO_SET_EDITING,NOTE_ADD,NOTE_DELETE} = todoSlice.actions
export const selectTodoList = state => state.todos.todoList
export const selectNoteList = state => state.todos.noteList
export default todoSlice.reducer
