import React from "react";
import { updaterAC, addNextAC } from "../../Redux/rankings-reducer";
import StoreContext from "../../StoreContext";
import Rankings from "./Rankings";

const RankingsContainer = (props) => {     
debugger

  return ( <StoreContext.Consumer>
    
    {
             (store)=>{
              
              let addNewName = () => {
               store.dispatch(addNextAC());
             };

               let updateText = (text) => {    
                store.dispatch(updaterAC(text));
             };

              let state = store.getState()
            return  <Rankings updateFighterName={updateText}
                        addNewName={addNewName} 
                        fighters={state.rankings.fighters}
                        newName={state.rankings.newName}/>}
          }
            </StoreContext.Consumer>  
        )
};

export default RankingsContainer;
