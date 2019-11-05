import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'jquery/src/jquery'; //for bootstrap.min.js
//bootstrap-theme file for bootstrap 3 only
// import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import App from './App';
import * as serviceWorker from './serviceWorker';




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();