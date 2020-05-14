import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as jPlayers } from 'react-jplayer';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';

// Styles the jPlayer to look nice
import 'react-jplayer/dist/css/skins/sleek.min.css';
// Styles Play/Pause/Mute etc when icons (<i />) are used for them
import 'react-jplayer/dist/css/controls/iconControls.min.css';

/* Pass the jPlayer reducer and it's initialStates to the store */
const store = createStore(combineReducers({ jPlayers }));

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
