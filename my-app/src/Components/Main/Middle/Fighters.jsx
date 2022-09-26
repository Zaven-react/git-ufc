import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { EshAC } from "../../../Redux/fighters-reducer";
import z from "./Fighters.module.css";

const Fighters = (props) => {
    let MidFight = props.store.mFighter.map((f) => {
    return (
      <div>
        <div>
          <img src={f.link} />
        </div>
        <div>{f.name}</div>
        <div>record-{f.record}</div>
        <div>weight-{f.weight}</div>
        <div>age-{f.age} </div>
      </div>
    );
  });

  return (
    <div className={z.middle}>
      <div>{MidFight}</div>
    </div>
  );
}; 


let mapStateToProps = (state)=>{
  return{
    store:state.fighters
  }
}

const FightersList = connect(mapStateToProps)(Fighters)

export default FightersList;
