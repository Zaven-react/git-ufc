import React from "react";
import z from "./Light.module.css";

const Light = (props) => {
  debugger;
  let LFighter = props.state.LightFighter.map((l) => {
    return (
      <div>
        <img src={l.src} />
        <div>{l.name}</div>
        <div>Age {l.age}</div>
        <div>Weight {l.weight}</div>
      </div>
    );
  });

  return <div className={z.light}>{LFighter}</div>;
};

export default Light;
