import React from "react";
import { connect } from "react-redux";
import { updaterAC, addNextAC } from "../../Redux/rankings-reducer";
import Rankings from "./Rankings";


let mapStateToProps = (state)=>{
  return {
    fighters:state.rankings.fighters,
    newName:state.rankings.newName             
  }
}

let mapDispatchToProps = (dispatch)=>{
  return {
    updateFighterName:(text)=>{
      dispatch(updaterAC(text));
    },
    addNewName:()=>{
      dispatch(addNextAC());
    }
  }
}

const RankingsContainer = connect(mapStateToProps,mapDispatchToProps)(Rankings)

export default RankingsContainer;
