import React from "react";
import z from "./Header.module.css";

const Header = () => {
  return (
    <div className={z.head}>
      <img
        className={z.img}
        src="https://upload.wikimedia.org/wikipedia/commons/9/92/UFC_Logo.svg"
      ></img>
    </div>
  );
};

export default Header;
