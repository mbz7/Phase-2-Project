import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Browser,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import "./index.css";
import App from "./Components/App";
import reportWebVitals from "./reportWebVitals";
// BrowserRouter - use this one in your applications!
// HashRouter - good for Scrimba

ReactDOM.render(
  <React.StrictMode>
    <Browser>
      <App />
    </Browser>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
