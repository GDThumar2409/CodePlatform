import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Header';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
        <Header />
    );
  }
}
export default App;
render(<App />, document.getElementById('root'));
