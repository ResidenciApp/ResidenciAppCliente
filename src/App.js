import React, { Component } from 'react';
import logo from './logo.svg';
import './views/App/App.css';
import Navigation from './components/Navigation';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
      </div>
    );
  }
}

export default App;
