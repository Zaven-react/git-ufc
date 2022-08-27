import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Fighters from "./Components/Main/Middle/Fighters";
import Main from "./Components/Main/Main";
import Menu from "./Components/Menu/Menu";
import z from "./Components/Main/Main.module.css";
import RankingsContainer from "./Components/Rankings/RankingsContainer";
import EventsContainer from "./Components/Events/EventsContainer";

const App = (props) => {
  debugger;
  return (
    <div className="App">
      <Header />
      <Menu />
      <div className={z.main}>
        <Route
          path="/fighters"
          render={() => <Fighters state={props.storeFighters.fighters} />}
        />
       
        <Route
          path="/rank"
          render={() => (
           <RankingsContainer  store={props.store}  />        
                     
          )}
        />
        <Route
          path="/events"
          render={() => (
            <EventsContainer   store={props.state} dispatch={props.dispatch}/>
          )}
        />
      </div>
    </div>
  );
};

export default App;
