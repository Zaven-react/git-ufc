import React from "react";

import z from "./Events.module.css";

const Events = (props) => {

    let firstFighter = props.store.first.map((ev1) => {
        return <div>{ev1.name}</div>;
      });
      let secondFighter = props.store.second.map((ev2) => {
        return (
          <div>
            <span>VS </span> {ev2.name}
          </div>
        );
      });
    
      let newName1 = props.store.newName;
      let newName2 = props.store.newName1;


      let addFight = () => {
        props.addFight()
      };
      let changeFighter = (e) => {
        let headlinerOne = e.target.value;
        props.updateFighterOne(headlinerOne)
      };
      let changeFighter1 = (e) => {
        let headlinerTwo = e.target.value;
        props.updateFighterTwo(headlinerTwo)
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
