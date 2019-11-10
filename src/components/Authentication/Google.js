import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import axios from 'axios';

import config from '../../config';


import GoogleLogin from 'react-google-login'

class Google extends Component {

  constructor(props) {
    super(props);

    this.state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        lastname: "",
        age: 0,
        username: "",
        email: '',
        avatar: '',
        sex: "",
        password: ""
    }

    this.responseGoogle = this.responseGoogle.bind(this);
  }

  async responseGoogle(response) {
    console.log(response)
    console.log(response.w3)

    this.setState({
        name: response.w3.ofa,
        lastname: response.w3.wea,
        age: 0,
        username: response.w3.U3.split('@')[0],
        email: response.w3.U3,
        avatar: response.w3.Paa,
        sex: 'O',
        password: response.w3.Eea
    })


    var path = '/api/v1/users/people/';
    var url = config.urlServer + path;
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
      sex,
      avatar
    } = this.state;


    var data = await axios.post(url, {
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

      return data;
    })

    // if(data.status === 400 && data.message === "USERNAME_ALREADY_EXISTS") {
    //     alert('Ya tiene una cuenta registrada, por favor inicie sesion');
    // }

    // Iniciar Sesion
    path = '/api/v1/users/api-token-auth/';

    url = config.urlServer + path;

    var {
      username,
      password
    } = this.state;

    data = await axios.post(url, {
      username: username,
      password: password
    })
    .then(response => {
      data = response.data;
      console.log(data);

      return data;
    })
    .catch(error => {
      alert('Ocurrio un Error');
    });

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
    let googleComponent;

    if(this.state.isLoggedIn){
        googleComponent = null;
    } else {
        googleComponent = (
            <GoogleLogin
                clientId="759676249086-po013qubf1mf4nfsrjj8uk5kc421eqn8.apps.googleusercontent.com"
                buttonText="Registrarse Con Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                icon
            />
        )
    }

    return (
      <div >
        {googleComponent}
      </div>
    )
  }
}

export default withRouter(Google);