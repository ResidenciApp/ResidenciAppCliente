import React, { Component } from 'react';
import './views/App/App.css';
import Navigation from './components/Navigation';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}

export default App;
