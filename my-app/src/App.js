import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Light from "./Components/Main//Light/Light";
import Middle from "./Components/Main/Middle/Middle";
import Main from "./Components/Main/Main";
import Menu from "./Components/Menu/Menu";
import z from "./Components/Main/Main.module.css";
import Rankings from "./Components/Rankings/Rankings";
import Events from "./Components/Events/Events";

const App = (props) => {
  debugger;
  return (
    <div className="App">
      <Header />
      <Menu />
      <div className={z.main}>
        <Route
          path="/middle"
          render={() => <Middle state={props.stor._state.middle} />}
        />
        <Route
          path="/light"
          render={() => <Light state={props.stor._state.light} />}
        />
        <Route
          path="/rank"
          render={() => (
            <Rankings
              country={props.state.rankings.country}
              fighters={props.state.rankings.fighters}
              newName={props.state.rankings.newName}
              dispatch={props.dispatch}
            />
          )}
        />
        <Route
          path="/events"
          render={() => (
            <Events store={props.state} dispatch={props.dispatch} />
          )}
        />
      </div>
    </div>
  );
};

export default App;
