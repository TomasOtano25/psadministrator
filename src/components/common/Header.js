import React from "react";
import { Link, NavLink } from "react-router-dom";
import LoadingDots from "../common/LoadingDots";
import PropTypes from "prop-types";

const Header = ({ loading }) => (
  <div>
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <img
            width="200px"
            src="http://stevemichelotti.com/content/images/2017/04/pluralsight-logo-2016-e1471542891309-1.png"
            alt="logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <nav className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/courses" className="nav-link">
                Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    {loading && <LoadingDots interval={100} dots={20} />}
  </div>
);

Headers.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
