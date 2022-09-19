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
import storeFighters from "./Redux/Store";

const App = (props) => {
    return (
    <div className="App">
      <Header />
      <Menu />
      <div className={z.main}>
        <Route  path="/fighters"  render={() => <Fighters/>}  />       
        <Route  path="/rank"  render={() => ( <RankingsContainer/> )}  />                     
        <Route  path="/events"   render={() => ( <EventsContainer /> )}      />  
      </div>
    </div>
  );
};

export default App;
