import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2></h2>
        </div>
        <p className="App-intro">
          来吧，我们做朋友吧React <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
