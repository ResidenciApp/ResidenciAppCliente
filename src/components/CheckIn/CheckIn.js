import React, { Component } from 'react';
import axios from 'axios';

import config from '../../config';

import './CheckIn.css';

export default class CheckIn extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      lastname: "",
      age: 0,
      username: "",
      email: "",
      sex: "",
      password: "",
      passwordAgain: ""
    }

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
    
    console.log(this.state);

    var path = '/api/v1/users/people/';
    var url = config.urlServer + path;

    // TODO: hacer el avatar dinamicamente con el correo
    var avatar = 'https://secure.gravatar.com/avatar/767fc9c115a1b989744c755db47feb60?size=100';
    // TODO: implementar token

    var token = 'token-key';

    var data = undefined;

    // CORS Configuration
    axios.defaults.withCredentials = true;
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";

    var {
      name,
      lastname,
      age,
      username,
      password,
      email,
      sex
    } = this.state;

    await axios.post(url, {
      name: name,
      lastName: lastname,
      age: age,
      nickname: username,
      password: password,
      avatar: avatar,
      mail: email,
      token: token,
      role: 1, // Role 1 ==> Usuario
      sex: sex
    }).then((response) => {
      data = response.data;
      console.log(data);
    })

    // this.props.history.push('/');
  }

  render() {
    return (
      <div className="container checkin">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <br/>

            <div className="card">
              <div className="card-header">
                <h3 className="text-center title-login">Registrar <span className="badge badge-residenciapp-green">Usuario</span></h3>
              </div>
              <div className="card-body">

                <div className="btn-group btn-group-lg d-flex justify-content-center" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-social btn-facebook">
                    <i className="fab fa-facebook-square"></i>
                  </button>
                  <button type="button" className="btn btn-social btn-facebook btn-lg btn-block">
                    Registrarse con Facebook
                  </button>
                </div>
                
                <hr />

                <div className="btn-group btn-group-lg d-flex justify-content-center" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-social btn-google">
                    <i className="fab fa-google"></i>
                  </button>
                  <button type="button" className="btn btn-social btn-google btn-lg btn-block">
                    Registrarse con Google
                  </button>
                </div>

                <hr />

                <h5 className="text-center">O Ingresando sus datos</h5>
                
                <form onSubmit={this.handleSubmit} role="form" id="form" method="POST">

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="name">
                        <i className="fas fa-address-card"></i>
                      </span>
                    </div>

                    <input
                      type="text"
                      className="form-control"
                      aria-label="Default"
                      aria-describedby="name"
                      placeholder="Ingrese su Nombre"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                      required
                    />

                    <div className="input-group-prepend">
                      <span className="input-group-text">Nombre</span>
                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="lastname">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>

                    <input
                      type="text"
                      className="form-control"
                      aria-label="Default"
                      aria-describedby="lastname"
                      placeholder="Ingrese su Apellido"
                      name="lastname"
                      value={this.state.lastname}
                      onChange={this.handleChange}
                      required
                    />

                    <div className="input-group-prepend">
                      <span className="input-group-text">Apellido</span>
                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="age">
                        <i className="fas fa-sort-numeric-up"></i>
                      </span>
                    </div>

                    <input
                      type="number"
                      className="form-control"
                      aria-label="Default"
                      aria-describedby="age"
                      placeholder="Ingrese su Edad"
                      name="age"
                      value={this.state.age}
                      onChange={this.handleChange}
                      required
                    />

                    <div className="input-group-prepend">
                      <span className="input-group-text">Edad</span>
                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="username">
                        <i className="fas fa-user"></i>
                      </span>
                    </div>

                    <input
                      type="text"
                      className="form-control"
                      aria-label="Default"
                      aria-describedby="username"
                      placeholder="Ingrese su Nombre de Usuario"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleChange}
                      required
                    />

                    <div className="input-group-prepend">
                      <span className="input-group-text">Username</span>
                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="email">
                        <i className="fas fa-envelope"></i>
                      </span>
                    </div>

                    <input
                      type="email"
                      className="form-control"
                      aria-label="Default"
                      aria-describedby="email"
                      placeholder="Ingrese su Correo"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      required
                    />

                    <div className="input-group-prepend">
                      <span className="input-group-text">Correo</span>
                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <label className="input-group-text">
                      <i className="fas fa-users"></i>
                      </label>
                    </div>

                    <select
                      className="custom-select" 
                      id="sex"
                      name="sex"
                      value={this.state.sex}
                      onChange={this.handleChange}
                      required
                      >

                      <option defaultValue="N">Elegir Sexo...</option>
                      <option value="F">Femenino</option>
                      <option value="M">Masculino</option>
                      <option value="O">Otro</option>
                    </select>

                    <div className="input-group-prepend">
                      <label className="input-group-text" htmlFor="sex">Sexo</label>
                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="password">
                        <i className="fas fa-unlock"></i>
                      </span>
                    </div>

                    <input 
                      type="password" 
                      className="form-control" 
                      aria-label="Default" 
                      aria-describedby="password" 
                      placeholder="Ingrese su Contraseña"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      required
                    />

                    <div className="input-group-prepend">
                      <span className="input-group-text">Contraseña</span>
                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="password-again">
                        <i className="fas fa-lock"></i>
                      </span>
                    </div>

                    <input
                      type="password" 
                      className="form-control" 
                      aria-label="Default" 
                      aria-describedby="password-again" 
                      placeholder="Confirme su Contraseña"
                      name="passwordAgain"
                      value={this.state.passwordAgain}
                      onChange={this.handleChange}
                      required
                    />

                    <div className="input-group-prepend">
                      <span className="input-group-text">Repetir Contraseña</span>
                    </div>
                    
                  </div>

                
                  <button type="submit" className="btn btn-residenciapp-green btn-lg btn-block">Submit</button>
                  <br />

                  <p className="text-center">
                    <a href="/login" className="badge badge-residenciapp-green">¿Ya tienes una cuenta? Inicia Sesión.</a>
                  </p>
                </form>
              </div>
            </div>


          </div>
        </div>
      </div>
    )
  }
}
