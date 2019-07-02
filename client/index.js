import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import store from "./store";

// get the app from the dom
const app = document.getElementById("app");
// render on app usign ReactDom
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  app,
  () => {
    console.log("DOM Rendered");
  }
);
