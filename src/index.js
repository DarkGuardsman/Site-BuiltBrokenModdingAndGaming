import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/*
 * Header:
 *      Logo Link Link Link Link
 *
 *
 *  Content:
 *      Slides about as other options are selected
 *      Needs to be given events by the Header... or Footer, hmm...
 *
 *
 *
 * Footer:
 *      Copyright GH_Link, blah
 */
