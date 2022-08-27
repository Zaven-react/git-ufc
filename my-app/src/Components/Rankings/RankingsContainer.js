import React from "react";
import { updaterAC, addNextAC } from "../../Redux/rankings-reducer";
import Rankings from "./Rankings";

const RankingsContainer = (props) => {  
    
let state = props.store.getState()

  let addNewName = () => {
    props.store.dispatch(addNextAC());
  };

  let updateText = (text) => {    
    props.store.dispatch(updaterAC(text));
  };

  return <Rankings updateFighterName={updateText}
                 addNewName={addNewName} 
                fighters={state.rankings.fighters}
                newName={state.rankings.newName}/>
};

export default RankingsContainer;
