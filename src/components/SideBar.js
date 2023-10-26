import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../styles/sidebar.css";

const SideBar = () => {
  const buildQueryString = (operation, valueObj) => {
    const { search } = useLocation();

    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  return (
    <div className="sidebar">
      <form className="sidebar-search">
        <input type="text" />
        <button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
      <h3 className="sidebar-heading">Filter By City</h3>
      <ul className="sidebar-links">
        <li className="sidebar-links-item">
          <Link to={buildQueryString("query", { city: "Manchester" })}>
            Manchester
          </Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={buildQueryString("query", { city: "Leeds" })}>Leeds</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={buildQueryString("query", { city: "Oxford" })}>Oxford</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={buildQueryString("query", { city: "Birmingham" })}>
            Birmingham
          </Link>
        </li>
        <li className="sidebar-links-item clear-filter">
          <Link to="/">Clear Filter</Link>
        </li>
      </ul>
      <h3 className="sidebar-heading">Sort By</h3>
      <ul className="sidebar-links">
        <li className="sidebar-links-item">
          <Link to={buildQueryString("sort", { price: 1 })}>
            Price Ascending
          </Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={buildQueryString("sort", { price: -1 })}>
            Price Descending
          </Link>
        </li>
        <li className="sidebar-links-item clear-filter">
          <Link to="/">Clear Sort</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
