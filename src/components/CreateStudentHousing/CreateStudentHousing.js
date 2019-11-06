import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

import config from '../../config';

import './CreateStudentHousing.css';

class CheckIn extends Component {

  constructor(props) {
    super(props);

    this.state = {
      owner: "",
      housingName: "",
      averagePrice: 0,
      adress: "",
      email: "",
      contactNumber:0,
      locality: "",
      includedServices: ""
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
        owner,
        housingName,
        averagePrice,
        adress,
        email,
        contactNumber,
        locality,
        includedServices,
        description
    } = this.state;

    // TODO: Verificar que contraseñas sean correctas
    // password == passwordAgain

    await axios.post(url, {
      owner: owner,
      housingName: housingName,
      averagePrice: averagePrice,
      adress: adress,
      phone: contactNumber,
      mail: email,
      locality: locality,
      includedServices: includedServices,
      description: description
    }).then((response) => {
      data = response.data;
      console.log(data);

      this.checkStatus(data);
    })

  }

  checkStatus(data) {
    if(data.status === 201 && data.message === "OK") {
      alert('Se registro correctamente');
      return this.props.history.push('/');
    }

    if(data.status === 400 && data.message === "USERNAME_ALREADY_EXISTS") {
      alert('Nombre de Usuario ya Existe');
    }
  }

  render() {
    return (
      <div className="container checkin">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <br/>

            <div className="card">
              <div className="card-header">
                <h3 className="text-center title-login">Registrar <span className="badge badge-residenciapp-green">Residencia</span></h3>
              </div>
              <div className="card-body">

                            
                

                <h5 className="text-center">Ingrese los datos de su residencia</h5>
                
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
                      aria-describedby="owner"
                      placeholder="Ingrese el nombre del propietario"
                      name="owner"
                      value={this.state.name}
                      onChange={this.handleChange}
                      required
                    />

                    <div className="input-group-prepend">
                      <span className="input-group-text">Propietario</span>
                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="housingName">
                        <i className="fas fa-home"></i>
                      </span>
                    </div>

                    <input
                      type="text"
                      className="form-control"
                      aria-label="Default"
                      aria-describedby="housingName"
                      placeholder="Ingrese el nombre de la residencia"
                      name="housingName"
                      value={this.state.housingName}
                      onChange={this.handleChange}
                      required
                    />

                    <div className="input-group-prepend">
                      <span className="input-group-text">Nombre Residencia</span>
                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="averagePrice">
                        <i className="fas fa-dollar-sign"></i>
                      </span>
                    </div>

                    <input
                      type="number"
                      className="form-control"
                      aria-label="Default"
                      aria-describedby="averagePrice"
                      placeholder="Ingrese el precio promedio (sin puntos ni comas)"
                      name="averagePrice"
                      value={this.state.averagePrice}
                      onChange={this.handleChange}
                      required
                    />

                    <div className="input-group-prepend">
                      <span className="input-group-text">Precio Promedio</span>
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
                      <span className="input-group-text" id="contactNumber">
                        <i className="fas fa-phone-square"></i>
                      </span>
                    </div>

                    <input
                      type="tel"
                      className="form-control"
                      aria-label="Default"
                      aria-describedby="contactNumber"
                      placeholder="Ingrese un número de contacto"
                      name="contactNumber"
                      value={this.state.phone}
                      onChange={this.handleChange}
                      required
                    />

                    <div className="input-group-prepend">
                      <span className="input-group-text">Número de contacto</span>
                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <label className="input-group-text">
                      <i className="fas fa-map-marked-alt"></i>
                      </label>
                    </div>

                    <select
                      className="custom-select" 
                      id="locality"
                      name="locality"
                      value={this.state.locality}
                      onChange={this.handleChange}
                      required
                      >

                      <option defaultValue="N">Elegir Localidad...</option>
                      <option value="15">Antonio Nariño</option>
                      <option value="12">Barrios Unidos</option>
                      <option value="07">Bosa</option>
                      <option value="02">Chapinero</option>
                      <option value="19">Ciudad Bolivar</option>
                      <option value="10">Engativa</option>
                      <option value="09">Fontibón</option>
                      <option value="08">Kennedy</option>
                      <option value="17">La Candelaria</option>
                      <option value="14">Los Mártires</option>
                      <option value="16">Puente Aranda</option>
                      <option value="18">Rafael Uribe Uribe</option>
                      <option value="04">San Cristobal</option>
                      <option value="03">Santa Fe</option>
                      <option value="11">Suba</option>
                      <option value="20">Sumapaz</option>
                      <option value="13">Teusaquillo</option>
                      <option value="06">Tunjuelito</option>
                      <option value="01">Usaquen</option>
                      <option value="05">Usme</option>
                    </select>

                    <div className="input-group-prepend">
                      <label className="input-group-text" htmlFor="Locality">Localidad</label>
                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="includedServies">
                        <i className="fas fa-wifi"></i>
                      </span>
                    </div>
                    <div className="input-group-prepend">
                      <span className="input-group-text">Servicios</span>

                    </div>
                    <div className="input-group-prepend">
                      <span>
                        <input type="checkbox" name="includedServices" value="Food"/> Alimentación<br></br>
                        <input type="checkbox" name="includedServices" value="TVCable" /> Cable TV<br></br>
                        <input type="checkbox" name="includedServices" value="Internet" /> Internet<br></br>
                        <input type="checkbox" name="includedServices" value="Laundry"/> Lavandería<br></br>
                        <input type="checkbox" name="includedServices" value="Cleaning" /> Limpieza<br></br>
                        <input type="checkbox" name="includedServices" value="AvailableKitchen"/> Cocina disponible<br></br>
                        <input type="checkbox" name="includedServices" value="PrivateBathroom" /> Baño privado<br></br>
                      </span>
                      

                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      
                      <span className="input-group-text" id='description'>Descripción</span>
                        
                      
                    </div>

                    <textarea name="description" cols="40" rows="10"></textarea>

                    
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="description">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>

                    <input
                      type="text"
                      className="form-control"
                      aria-label="Default"
                      aria-describedby="housingName"
                      placeholder="Ingrese el nombre de la residencia"
                      name="housingName"
                      value={this.state.housingName}
                      onChange={this.handleChange}
                      required
                    />

                    <div className="input-group-prepend">
                      <span className="input-group-text">Nombre Residencia</span>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-residenciapp-green btn-lg btn-block">Submit</button>
                  <br />

                  
                </form>
              </div>
            </div>


          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(CheckIn);