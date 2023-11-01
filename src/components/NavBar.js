import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../styles/resources/logo.png";
import Logout from "./Logout";
import { Context } from "../Context/AuthContext";

const NavBar = () => {
  // console.log(useContext(Context));
  // console.log(user);
  const { user } = useContext(Context);

  return (
    <div className="navbar">
      <img
        className="logo"
        src={logo}
        alt="surreal estate logo with small castle"
      />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">View Properties</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="add-property">Add a Property</Link>
        </li>
      </ul>
      <ul className="account-links">
        {/* {!user ? (
          <li className="navbar-links-item sign-up">
            <Link to="sign-up">Sign Up</Link>
          </li>
        ) : (
          <>
            <li className="navbar-links-item login">
              <Link to="login">Login</Link>
            </li>
            <li className="navbar-links-item logout">
              <Logout />
            </li>
          </>
        )} */}
        {!user ? (
          <li className="navbar-links-item login">
            <Link to="login">Login</Link>
          </li>
        ) : (
          <li className="navbar-links-item logout">
            <Logout />
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
