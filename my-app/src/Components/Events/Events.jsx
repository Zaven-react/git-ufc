import React from "react";
import {
  addheadlinerAC,
  updaterNNAC,
  updaterNNTWOAC,
} from "../../Redux/events-reducer";
import z from "./Events.module.css";

const Events = (props) => {
  debugger;
  let firstFighter = props.store.events.first.map((ev1) => {
    return <div>{ev1.name}</div>;
  });
  let secondFighter = props.store.events.second.map((ev2) => {
    return (
      <div>
        <span>VS </span> {ev2.name}
      </div>
    );
  });

  let newName1 = props.store.events.newName;
  let newName2 = props.store.events.newName1;

  let addFight = () => {
    props.dispatch(addheadlinerAC());
  };
  let changeFighter = (e) => {
    let headlinerOne = e.target.value;
    props.dispatch(updaterNNAC(headlinerOne));
  };
  let changeFighter1 = (e) => {
    let headlinerTwo = e.target.value;
    props.dispatch(updaterNNTWOAC(headlinerTwo));
  };

  return (
    <div className={z.eve}>
      <div className={z.div}>{firstFighter}</div>
      <div className={z.div}>{secondFighter}</div>

      <div>
        <div>
          <textarea onChange={changeFighter} value={newName1}></textarea>
          <textarea onChange={changeFighter1} value={newName2}></textarea>
        </div>
        <div>
          <button onClick={addFight}>ADD FIGHTER 1 </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
