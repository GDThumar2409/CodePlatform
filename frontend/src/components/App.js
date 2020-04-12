import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Header from './Header';
import Home from './Home'
import CSVUpload from './CSVUpload'
import Login from './login'
import './style.css';
import reducer from './store/reducers/auth';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhances(
    applyMiddleware(thunk)
));

class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
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

render(<Provider store={store}><Router forceRefresh={false}><App /></Router></Provider>, document.getElementById('root'));
