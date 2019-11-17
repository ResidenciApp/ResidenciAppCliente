import React, { Component } from 'react';
import './views/App/App.css';
import Navigation from './components/Navigation/Navigation';

import StudentHousingCardView from './views/CardView/StudentHousingCardView';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navigation />
        
        <StudentHousingCardView />

        <Footer />

      </div>
    );
  }
}

export default App;
