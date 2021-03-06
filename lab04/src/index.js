import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { MovieReducer } from './reducers/MovieReducer';
import { combineReducers, createStore } from 'redux';
import { DirectorReducer } from './reducers/DirectorReducer';
import {ActorReducer} from './reducers/ActorReducer';
const store = createStore(
  combineReducers({
    movies: MovieReducer,
    directors: DirectorReducer,
    actors: ActorReducer
  }))

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
