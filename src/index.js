import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './stylesheets/APP.scss'

import * as serviceWorker from './serviceWorker';
window.React = React

ReactDOM.render(
  <App className="app"/>,
  document.getElementById('root')
  /*
  <AddColorForm onNewColor={logColor}/>,
  document.getElementById('root')
  */
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
