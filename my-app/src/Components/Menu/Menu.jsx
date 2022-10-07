import React from "react";
import { NavLink } from "react-router-dom";
import z from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={z.menu}>
      <header>
       
        <div>
          <NavLink to="/fighters" activeClassName={z.active}>
            FIGHTERS
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
        <div>
          <NavLink to="/fans" activeClassName={z.active}>
            FANS
          </NavLink>
        </div>
      </header>
    </div>
  );
};

export default Menu;
