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
  constructor(props) {
    super(props);
    this.state = {
      name: 'Home'
    };
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
        <Route path="/about">
          <Home />
        </Route>
        <Route path="/csvupload">
          <CSVUpload />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </div>
    );
  }
}

render(<Router forceRefresh={false}><App /></Router>, document.getElementById('root'));
