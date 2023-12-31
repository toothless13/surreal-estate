import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import "../styles/logout.css";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    signOut(auth)
      .then(() => {
        console.log("User signed out.");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <button className="logout-button" type="submit" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
