import React, { Component } from 'react';
import { render } from 'react-dom';
import './Header.css';

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
        <a className="navbar-brand mr-4" href="#">Dashboard</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle"
          aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggle">
          <div className="navbar-nav mr-auto">
            <a className="nav-item nav-link" href="#">Home</a>


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