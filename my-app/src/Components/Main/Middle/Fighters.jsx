import React from "react";
import { NavLink } from "react-router-dom";
import z from "./Fighters.module.css";

const Fighters = (props) => {
  let MidFight = props.state.mFighter.map((f) => {
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

export default Fighters;
