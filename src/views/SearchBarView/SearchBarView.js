import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';

import Footer from '../../components/Footer/Footer';
import NavigationBar from '../../components/SearchBar/SearchBar';

export default class LoginView extends Component {
  render() {
    return (
      <div className="SearchBarView">
        
        <Navigation />

        <NavigationBar />

        <Footer />

      </div>
    )
  }
}
