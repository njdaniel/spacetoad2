import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DataTable from './components/table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Space Toad Market</h2>
        </div>
        <p className="App-intro">
          To get started, search the market
        </p>
          <DataTable/>
      </div>
    );
  }
}

export default App;
