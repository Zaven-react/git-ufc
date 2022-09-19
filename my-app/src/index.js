import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { subscribe } from "./Redux/Redux-Store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store, { addNext, updater } from "./Redux/Redux-Store";
import { BrowserRouter } from "react-router-dom";
import storeFighters from "./Redux/Store";
import  {Provider} from "./StoreContext";

let rerender = (state) => {
  ReactDOM.render(
    
      <BrowserRouter>
        <Provider store={store}>
          <App />           
        </Provider>
      </BrowserRouter>,
  
    document.getElementById("root")
  );
};

rerender();

store.subscribe(() => {
 
  rerender();
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
