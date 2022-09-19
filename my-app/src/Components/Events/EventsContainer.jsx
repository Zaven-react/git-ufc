import React from "react";
import {
  addheadlinerAC,
  updaterNNAC,
  updaterNNTWOAC,
} from "../../Redux/events-reducer";
import StoreContext from "../../StoreContext";
import Events from "./Events";


const EventsContainer = () => 

{debugger
  return <StoreContext.Consumer>{
              (store)=>{
              
               let addFight = () => {
                 store.dispatch(addheadlinerAC());
               };
               let changeFighter = (headlinerOne) => {
                store.dispatch(updaterNNAC(headlinerOne));
               };
               let changeFighter1 = (headlinerTwo) => {
                 store.dispatch(updaterNNTWOAC(headlinerTwo));
               };
               let state = store.getState()
            return <Events  addFight={addFight}
                      updateFighterOne = {changeFighter} 
                      updateFighterTwo ={changeFighter1}
                      store={state.events}/>}
                      }
        </StoreContext.Consumer>
};

export default EventsContainer;

