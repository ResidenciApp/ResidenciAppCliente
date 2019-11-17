import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';

import Footer from '../../components/Footer/Footer';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

export default class LoginView extends Component {
  render() {
    return (
      <div className="NavigationBarView">
        
        <Navigation />

        <NavigationBar />

        <Footer />

      </div>
    )
  }
}
