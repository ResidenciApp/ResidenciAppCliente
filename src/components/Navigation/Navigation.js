import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import axios from 'axios';

import config from '../../config';

import './Navigation.css';
import logo from '../../ResidenciApp.png';

class Navigation extends Component {

  constructor(props) {
    super(props);

    // Se definieron los 3 estados que se van a utilizar
    this.state = {
      isLogged: false,
      username: '',
      role: ''
    };

    // Se declarar las funciones que se van a usar en el componente
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.updateUserName = this.updateUserName.bind(this);
  }

  componentDidMount() {
    // Verificar si un Usuario ya inicio sesión o No

    if(localStorage.getItem('TOKEN')) {
      // Si tiene algun token significa que ya inicio sesión
      // y por tanto cambiamos el estado 'isLogged' a true
      this.setState({
        isLogged: true
      })

      this.updateUserName();
    } else {
      // En caso contrario significa que el Usuario no ha iniciado sesión
      // Por tanto dejamos el stado 'isLogged' en false
      this.setState({
        isLogged: false
      })

    }
  }

  handleLogOut() {
    // Obtener el TOKEN desde el localstorage
    var token = localStorage.getItem('TOKEN');
    
    // Ruta a la que se va a hacer la paticion de logout
    var path = '/api/v1/users/api-token-logout/';

    // www.residenciapp.herokuapp.com/api/v1/users/api-token-logout/
    var url = config.urlServer + path;

    // CORS Configuration
    axios.defaults.withCredentials = true;
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    
    // Enviar Token de autenticación
    // POST: /api/v1/users/api-token-logout/
    axios.post(url, {
      headers: {
        Authorization: `Token ${token}`
      } 
    })
    .then(response => {
      var data = response.data;
      console.log(data)

      // Verificar 'status' de la respuesta del servidor
      this.checkStatus(data);
      
    })
    .catch(error => {
      // informar al usuario sobre el error
      alert('Ocurrio un Error');
      console.log(error);
    });
  }

  checkStatus(data) {
    // Verificar que el token fuese eliminado en la base de datos
    if(data.status === 200 && data.message === 'LOGOUT_WAS_SUCCESSFUL') {
      console.log(data.message)
      
      // Eliminar Token en el Local Storage
      localStorage.removeItem('TOKEN');

      // Redirecionar a Home
      this.props.history.push('/');
      
      // Cambiar estado
      this.setState({
        isLogged: false
      });

    } else {
      alert('Ocurrio un Error');
      console.log(data.message)
    }
  }

  async updateUserName() {

    // Obtener Token del LocalStorage
    var token = localStorage.getItem('TOKEN');

    var path = '/api/v1/users/token-role/';
    var url = config.urlServer + path;

    // Hace una consulta POST: /api/v1/users/token-role/
    // Que trae el 'role' y el 'username' del usuario

    await axios.post(url, {
      headers: {
        Authorization: `Token ${token}`
      } 
    })
    .then(response => {
      var data = response.data;

      console.log(data)
      
      // Verificar que la consulta tenga una respuesta positiva
      if(data.status===200 && data.message==='OK') {
        // Actualizar el estado 'username'
        this.setState({
          username: data.username,
          role: data.role_name
        })
      }

    })
    .catch(error => {
      // Informar al usuario sobre el error
      alert('Ocurrio un Error');
      console.log(error);
    });

  }

  render() {
    var elements = [];
    
    var userProfile = '';

    // Verificar si el usuario esta Logueado
    if(this.state.isLogged) {
      // En caso de que esté Logueado, Muestra los siguientes Items
      // En la barra de Navegación


      elements.push({
        name: 'Home',
        path: '/',
        icon: 'fas fa-home'
      });

      elements.push({
        name: 'Buscar Residencia',
        path: '/buscar',
        icon: 'fas fa-search-location'
      });

      if (this.state.role === 'Usuario') {
        // Rutas que solo puede acceder el Usuario
        // userProfile = '/perfil/'+this.state.username;
      } else if(this.state.role === 'Propietario') {
        // Rutas que solo puede acceder el Propietario

        userProfile = '/perfil-propietario/'+this.state.username;

        elements.push({
          name: 'Registrar Residencia',
          path: '/registrar-residencia',
          icon: 'fas fa-plus'
        })

      } else if (this.state.role === 'Administrador') {
        // Rutas que solo puede acceder el Administrador
      }

      
    } else {

      // En caso de que el usuario no este Logueado
      // Muestra los siguientes Items
      elements.push({
        name: 'Home',
        path: '/',
        icon: 'fas fa-home'
      });

      elements.push({
        name: 'Buscar Residencia',
        path: '/buscar',
        icon: 'fas fa-search-location'
      });

      elements.push({
        name: 'Iniciar Sesión',
        path: '/login',
        icon: 'fas fa-sign-in-alt'
      });

      elements.push({
        name: 'Registrarse',
        path: '/registrarse',
        icon: 'fas fa-user-plus'
      });

      elements.push({
        name: 'Registrar Propietario',
        path: '/registrar-propietario',
        icon: 'fas fa-building'
      });
      
    }

    return (
      <div className="navigation">
        <div className="logo-background">
          <div className="row">
            <a className="navbar-brand justify-content-start col-2" href="/">
              <img src={logo} className="logo-img" />
            </a>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-secondary nav-height black-background" >

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collpse-navigation"
            aria-controls="collpse-navigation" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse primary" id="collpse-navigation">
        
            <ul className="navbar-nav mr-auto">

              {elements.map((value, index) => {
                return (
                  <li key={index} className={"nav-item"}>
                    <a key={index} className={"nav-link"} href={value.path}>
                      <i key={index} className={value.icon}></i> {value.name}
                    </a>
                  </li>
                )
              })}
    
            </ul>

            {this.state.isLogged?

            <div className="collapse navbar-collapse justify-content-end" style={{marginRight: "50px"}}>
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                      <span className="fas fa-user-friends"></span> {this.state.username}
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href={userProfile}>Perfil</a>
                      
                      <br/>

                      <a className="dropdown-item" href="#">
                        <span className="fas fa-cog"></span> Configuraciones
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" onClick={this.handleLogOut}>
                        <span className="fas fa-sign-out-alt"></span> Salir
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              :
              ""
            }

          </div>
        
      </nav>
      </div>
    )
  }
}

export default  withRouter(Navigation);