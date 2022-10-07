import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import FightersList from "./Components/Main/Middle/Fighters";
import Main from "./Components/Main/Main";
import Menu from "./Components/Menu/Menu";
import z from "./Components/Main/Main.module.css";
import RankingsContainer from "./Components/Rankings/RankingsContainer";
import EventsContainer from "./Components/Events/EventsContainer";
import FansContainer from "./Components/Fans/FansContainer";



const App = (props) => {
    return (
    <div className="App">
      <Header />
      <Menu />
      <div className={z.main}>
        <Route  path="/fighters"  render={() => <FightersList/>}  />       
        <Route  path="/rank"  render={() => ( <RankingsContainer/> )}  />                     
        <Route  path="/events"   render={() => ( <EventsContainer /> )}/>  
        <Route  path="/fans"   render={() => <FansContainer/>}/>  
      </div>
    </div>
  );
};

export default App;
