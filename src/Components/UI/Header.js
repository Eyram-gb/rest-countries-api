import React from "react";
import { BiMoon } from "react-icons/bi";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h3>Where in The world?</h3>
      <span>
        <BiMoon />
        <p>Dark Mode</p>
      </span>
    </div>
  );
}

export default Header;
