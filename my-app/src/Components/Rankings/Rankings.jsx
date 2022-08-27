import React from "react";
import z from "./Rankings.module.css";
import Rat from "./Rat";

const Rankings = (props) => {

  let newF = React.createRef();
  let addNewName = () => {
    props.addNewName()
  };

  let updateText = () => {
    let text = newF.current.value;
    props.updateFighterName(text)
  };

  let fighterName = props.fighters.map((f) => {
    return <Rat name={f.name} id={f.id} />;
  });

  return (
    <div className={z.rank}>
      <ol>{fighterName}</ol>
      
      <div>
        <div className={z.area}>
          <textarea ref={newF} onChange={updateText} value={props.newName} />
        </div>
        <div>
          <button onClick={addNewName}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default Rankings;
