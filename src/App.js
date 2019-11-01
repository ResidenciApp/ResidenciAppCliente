import React, { Component } from 'react';
import './views/App/App.css';
import Navigation from './components/Navigation/Navigation';

import StudentHousingCardView from './views/CardView/StudentHousingCardView';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navigation />
        
        <StudentHousingCardView />

      </div>
    );
  }
}

export default App;
