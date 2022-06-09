import React from "react";
import { NavLink } from "react-router-dom";
import z from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={z.menu}>
      <header>
        <div>
          <NavLink to="/light" activeClassName={z.active}>
            LIGHTWEIGHT
          </NavLink>
        </div>
        <div>
          <NavLink to="/middle" activeClassName={z.active}>
            MIDDLEWEIGHT
          </NavLink>
        </div>
        <div>
          <NavLink to="/rank" activeClassName={z.active}>
            RANKINGS
          </NavLink>
        </div>
        <div>
          <NavLink to="/events" activeClassName={z.active}>
            EVENTS
          </NavLink>
        </div>
      </header>
    </div>
  );
};

export default Menu;
