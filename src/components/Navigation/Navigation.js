import React, { Component } from 'react';

import './Navigation.css';
import logo from '../../ResidenciApp.png';

export default class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <div className="logo-background">
          <div className="row">
            <a className="navbar-brand justify-content-start col-2" href="/">
              <img src={logo} className="logo-img" />
            </a>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-secondary nav-height" style={{backgroundColor: "#000", color: "#FFF"}}>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
            aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse primary" id="basicExampleNav">
        
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="fas fa-home"></i> Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  <i className="fas fa-sign-in-alt"></i> Iniciar Sesión
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/registrarse">
                  <i className="fas fa-user-plus"></i> Registrarse
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/registrar-propietario">
                  <i class="fas fa-building"></i> Registrar Propietario
                </a>
              </li>
            </ul>
          </div>
        
      </nav>
      </div>
    )
  }
}
