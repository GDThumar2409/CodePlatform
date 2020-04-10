import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  NavLink,
  Link
} from "react-router-dom";

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <header className="site-header">
    <nav className="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand mr-4">Dashboard</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle"
          aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggle">
          <div className="navbar-nav mr-auto">
            <NavLink to="/CSVUpload" className="nav-item nav-link" activeClassName="hurray">
              Upload CSV
            </NavLink>

          </div>
          
          <div className="navbar-nav">

            <a className="nav-item nav-link" href="#">Logout</a>

          </div>
        </div>
      </div>
    </nav>
  </header>
      </div>
    );
  }
}

export default Header;