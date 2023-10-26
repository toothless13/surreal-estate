import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-links">
        <li className="sidebar-links-item">
          <Link to={`/?query={"city": "Manchester"}`}>Manchester</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={`/?query={"city": "Leeds"}`}>Leeds</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={`/?query={"city": "Oxford"}`}>Oxford</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={`/?query={"city": "Birmingham"}`}>Birmingham</Link>
        </li>
        <li className="sidebar-links-item clear-filter">
          <Link to="/">Clear Filter</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
