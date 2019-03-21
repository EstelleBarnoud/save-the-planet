import React, { Component } from 'react';
import logo from './sketch-3.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="Header-msg" alt="want to fight climate change?" />
          <p>
            A few tips to tackle the biggest issue of this century
          </p>
        </header>
      </div>
    );
  }
}

export default App;
