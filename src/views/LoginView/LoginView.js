import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Login from '../../components/Login/Login';
import Footer from '../../components/Footer/Footer';

export default class LoginView extends Component {
  render() {
    return (
      <div className="loginview">
        
        <Navigation />

        <Login />

        <Footer />

      </div>
    )
  }
}
