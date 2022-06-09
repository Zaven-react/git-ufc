import React from "react";
import z from "./Rankings.module.css";
import Rat from "./Rat";
import Country from "./Country";
import { updaterAC, addNextAC } from "../../Redux/rankings-reducer";

const Rankings = (props) => {
  let newF = React.createRef();
  let addNewName = () => {
    props.dispatch(addNextAC());
  };

  let updateText = () => {
    let text = newF.current.value;
    props.dispatch(updaterAC(text));
  };

  let fighterName = props.fighters.map((f) => {
    return <Rat name={f.name} id={f.id} />;
  });
  let nation = props.country.map((m) => {
    return <Country country={m.name} />;
  });

  return (
    <div className={z.rank}>
      <ol>{fighterName}</ol>
      <ul>{nation}</ul>
      <div>
        <div>
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
