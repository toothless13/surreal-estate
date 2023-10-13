import React from "react";
import "../styles/navbar.css";
import logo from "../styles/resources/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img
        className="logo"
        src={logo}
        alt="surreal estate logo with small castle"
      />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <a href="/">View Properties</a>
        </li>
        <li className="navbar-links-item">
          <a href="/">Add a Property</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
