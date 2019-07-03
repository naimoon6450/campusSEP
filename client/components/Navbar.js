import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div id="main">
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">WELCOME TO CAMPUS THE OF BRILLIANCE</h1>
          </div>
        </div>
      </section>
      <nav
        id="navbar"
        className="navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <i className="fa fa-university fa-3x" />
          </a>

          <a
            role="button"
            class="navbar-burger burger"
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
            <Link to="/" className="navbar-item">
              Go Home
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
