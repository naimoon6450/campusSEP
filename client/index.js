import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';

// get the app from the dom
const app = document.getElementById('app');
// render on app usign ReactDom
ReactDOM.render(<Main />, app, () => {
  console.log('DOM Rendered');
});
