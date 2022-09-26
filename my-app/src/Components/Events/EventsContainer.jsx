import React from "react";
import { connect } from "react-redux";
import {
  addheadlinerAC,
  updaterNNAC,
  updaterNNTWOAC,
} from "../../Redux/events-reducer";
import Events from "./Events";



let mapStateToProps = (state)=>{
  return{
    store:state.events
  }
}
let mapDispatchToProps = (dispatch)=>{
  return{
    addFight:()=>{
      dispatch(addheadlinerAC());
    },
    updateFighterOne:(headlinerOne)=>{
      dispatch(updaterNNAC(headlinerOne));
    },
    updateFighterTwo:(headlinerTwo)=>{
      dispatch(updaterNNTWOAC(headlinerTwo));
    }
  }
}

const EventsContainer = connect(mapStateToProps,mapDispatchToProps)(Events)

export default EventsContainer;

