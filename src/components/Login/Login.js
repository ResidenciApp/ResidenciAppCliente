import React, { Component } from 'react';

import {withRouter} from 'react-router-dom';

import axios from 'axios';

import config from '../../config';

import './Login.css';

import Facebook from '../Authentication/Facebook'
import Google from '../Authentication/Google'

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    }
    
    this.checkStatus  = this.checkStatus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    var data;

    var path = '/api/v1/users/api-token-auth/';

    var url = config.urlServer + path;

    var {
      username,
      password
    } = this.state;

    await axios.post(url, {
      username: username,
      password: password
    })
    .then(response => {
      data = response.data;
      console.log(data);

      this.checkStatus(data);
    })
    .catch(error => {
      alert('Ocurrio un Error');
    });


  }

  checkStatus(data) {
    if(data.status === 400 && data.message === 'INCORRECT_PASSWORD_OR_USERNAME') {
      alert('Nombre de Usuario o Contraseña Incorrecta')
    }

    if(data.status === 400 && data.message === 'USERNAME_OR_PASSWORD_IS_NONE') {
      alert('Nombre de Usuario o Contraseña Incorrecta')
    }

    if(data.status === 200 && data.message === 'OK') {
      localStorage.removeItem('TOKEN');
      localStorage.setItem('TOKEN', data.Token);
      this.props.history.push('/')
    }
    
  }

  render() {
    return (
      <div className="container login">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <br/>

            <div className="card">
              <div className="card-header">
                <h3 className="text-center title-login">Iniciar <span className="badge badge-residenciapp-green">Sesión</span></h3>
              </div>
              <div className="card-body">

                <Facebook />
                <div className="row justify-content-center">
                  <div className="col-9">
                    <Google />
                  </div>
                </div>
                
                <hr />

                <form onSubmit={this.handleSubmit} role="form" id="form" method="POST">
                  <div className="form-group">

                    <label htmlFor="username">Nombre de Usuario</label>

                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Ingrese su Nombre de Usuario"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleChange}
                      required
                    />

                    <small id="emailHelp" className="form-text text-muted">No compartiremos tus datos</small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Contraseña</label>

                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Ingresa su Contraseña"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      required
                    />

                  </div>
                
                  <button type="submit" className="btn btn-residenciapp-green btn-lg btn-block">Iniciar Sesión</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);
