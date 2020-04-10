import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header';
import Home from './Home'
import CSVUpload from './CSVUpload'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Home'
    };
  }
  render() {
    return (
      <div>
        <Header />

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
