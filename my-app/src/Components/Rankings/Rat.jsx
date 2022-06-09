import React from "react";
import { NavLink } from "react-router-dom";

const Rat = (props) => {
  return (
    <li>
      <NavLink to={"/rank/" + props.id}>{props.name}</NavLink>
    </li>
  );
};

export default Rat;
