import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { TodoReducer } from './reducers/TodoReducer';
import { NoteReducer } from './reducers/NoteReducer';
import { combineReducers, createStore } from 'redux';
const store = createStore(
  combineReducers(
    { 
      todos: TodoReducer,
      notes: NoteReducer
    }
  ))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
