import React from "react";
import {
  addheadlinerAC,
  updaterNNAC,
  updaterNNTWOAC,
} from "../../Redux/events-reducer";
import Events from "./Events";


const EventsContainer = (props) => {

debugger

  let addFight = () => {
    props.dispatch(addheadlinerAC());
  };
  let changeFighter = (headlinerOne) => {
  
    props.dispatch(updaterNNAC(headlinerOne));
  };
  let changeFighter1 = (headlinerTwo) => {
   
    props.dispatch(updaterNNTWOAC(headlinerTwo));
  };

  return <Events  addFight={addFight}
                  updateFighterOne = {changeFighter} 
                  updateFighterTwo ={changeFighter1}
                  store={props.store}/>
};

export default EventsContainer;

