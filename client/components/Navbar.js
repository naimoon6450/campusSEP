import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="navbar is-link"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <i className="fa fa-university fa-3x" />
        </a>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/students" className="navbar-item">
            All Students
          </Link>
          <Link to="/campuses" className="navbar-item">
            All Campuses
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
