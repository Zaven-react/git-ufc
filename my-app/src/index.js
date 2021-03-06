import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { subscribe } from "./Redux/Redux-Store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store, { addNext, updater } from "./Redux/Redux-Store";
import { BrowserRouter } from "react-router-dom";
import stor from "./Redux/Store";

let rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          dispatch={store.dispatch.bind(store)}
          store={store}
          stor={stor}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerender(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerender(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
