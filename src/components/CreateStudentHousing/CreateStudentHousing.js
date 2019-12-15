import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

import config from '../../config';

import './CreateStudentHousing.css';


class CreateStudentHousing extends Component {

  constructor(props) {
    super(props);

    this.state = {
      owner: "",
      housingName: "",
      averagePrice: 0,
      address: "",
      locality: "",
      includedServices: [],
      description: "",
      city: "",
      rules: "",
      file: undefined,
      imgPath: ''
    }
    
    this.checkStatus  = this.checkStatus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateUserName = this.updateUserName.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.setImage = this.setImage.bind(this);

    this.updateUserName();
    
  }

  handleChange(event) {
    if(event.target.type==='checkbox' && event.target.name==='includedServices') {
      var arr = this.state.includedServices;
      if(event.target.checked) {
        arr.push(parseInt(event.target.value))
      } else {
        arr.splice(arr.indexOf(parseInt(event.target.value)), 1)
      }

      this.setState({
        includedServices: arr
      })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    
    console.log(this.state);

    var path = '/api/v1/student_housing/residence_publication/';
    var url = config.urlServer + path;


    var data = undefined;

    // CORS Configuration
    axios.defaults.withCredentials = true;
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";

    var {
        owner,
        housingName,
        averagePrice,
        address,
        contactNumber,
        locality,
        includedServices,
        description,
        city,
        rules,
        imgPath
    } = this.state;

    console.log(this.state)


    var data = await axios.post(url, {
      owner: owner,
      name: housingName,
      price: averagePrice,
      address: address,
      locality: locality,
      services: includedServices,
      description: description,
      city: city,
      rules: rules,
      photo: imgPath
    }).then((response) => {
      console.log(response.data);
      this.checkStatus(response.data);
      return data;
    })

  }

  checkStatus(data) {
    if(data.status === 201 && data.message === "OK") {
      alert('Se registro correctamente');
      return this.props.history.push('/');
    }

    if(data.status === 400) {
      alert('Ocurrio un error al registrar la residencia');
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
          owner: data.username
        })
      }

    })
    .catch(error => {
      alert('Ocurrio un Error');
      console.log(error);
    });

  }

  async uploadImage(event) {
    let files = event.target.files;
    await this.handleUpload(files[0], this.setImage);
  }

  async setImage(data) {
    this.setState({
      imgPath: data
    })

    console.log(this.state.imgPath)
    alert('La imagen se cargo correctamente')
  }


  async handleUpload (file, func) {
    let reader = new FileReader();
    await reader.readAsDataURL(file);

    reader.onload = await function(e) {
      const url = config.urlServer + '/api/v1/student_housing/upload-photo-residence/';
      const data = {
        file: e.target.result
      }

      return axios.post(url, data)
        .then(response => {

          if(response.status > 200 && response.status < 300) {
            func(response.data.url);
          }

          return response;
        })
    }

  }

  render() {
    return (
      <div data-testid="Register_residence_form" className="container checkin">
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
                      placeholder="Ingrese el precio (sin puntos ni comas)"
                      name="averagePrice"
                      value={this.state.averagePrice}
                      onChange={this.handleChange}
                      required
                    />

                    <div className="input-group-prepend">
                      <span className="input-group-text">Precio</span>
                    </div>
                  </div>

                  <div className="input-group mb-3">

                    <input
                      type="file"
                      className="form-control"
                      aria-label="Default"
                      aria-describedby="file"
                      placeholder="Subir Imagen"
                      name="file"
                      id="file"
                      onChange={this.uploadImage}
                      required
                    />

                    <div className="input-group-prepend">
                      <span className="input-group-text">Subir Imagen</span>
                    </div>

                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="address">
                        <i className="fas fa-street-view"></i>
                      </span>
                    </div>

                    <input
                      type="address"
                      className="form-control"
                      aria-label="Default"
                      aria-describedby="address"
                      placeholder="Ingrese la Dirección"
                      name="address"
                      value={this.state.address}
                      onChange={this.handleChange}
                      required
                    />

                    <div className="input-group-prepend">
                      <span className="input-group-text">Dirección</span>
                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <label className="input-group-text">
                      <i className="fas fa-building"></i>
                      </label>
                    </div>

                    <select
                      className="custom-select" 
                      id="city"
                      name="city"
                      value={this.state.city}
                      onChange={this.handleChange}
                      required
                      >

                      <option defaultValue="N">Elegir Ciudad...</option>
                      <option value="Bogotá D.C.">Bogotá D.C.</option>
                    </select>

                    <div className="input-group-prepend">
                      <label className="input-group-text" htmlFor="city">Ciudad</label>
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
                      <option value="Antonio Nariño">Antonio Nariño</option>
                      <option value="Barrios Unidos">Barrios Unidos</option>
                      <option value="Bosa">Bosa</option>
                      <option value="Chapinero">Chapinero</option>
                      <option value="Ciudad Bolivar">Ciudad Bolivar</option>
                      <option value="Engativa">Engativa</option>
                      <option value="Fontibón">Fontibón</option>
                      <option value="Kennedy">Kennedy</option>
                      <option value="La Candelaria">La Candelaria</option>
                      <option value="Los Mártires">Los Mártires</option>
                      <option value="Puente Aranda">Puente Aranda</option>
                      <option value="Rafael Uribe Uribe">Rafael Uribe Uribe</option>
                      <option value="San Cristobal">San Cristobal</option>
                      <option value="Santa Fe">Santa Fe</option>
                      <option value="Suba">Suba</option>
                      <option value="Sumapaz">Sumapaz</option>
                      <option value="Teusaquillo">Teusaquillo</option>
                      <option value="Tunjuelito">Tunjuelito</option>
                      <option value="Usaquen">Usaquen</option>
                      <option value="Usme">Usme</option>
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
                        <input type="checkbox" name="includedServices" value="1" onChange={this.handleChange} /> Alimentación<br></br>
                        <input type="checkbox" name="includedServices" value="2" onChange={this.handleChange} /> Cable TV<br></br>
                        <input type="checkbox" name="includedServices" value="3" onChange={this.handleChange} /> Internet<br></br>
                        <input type="checkbox" name="includedServices" value="4" onChange={this.handleChange} /> Lavandería<br></br>
                        <input type="checkbox" name="includedServices" value="5" onChange={this.handleChange} /> Limpieza<br></br>
                        <input type="checkbox" name="includedServices" value="6" onChange={this.handleChange} /> Cocina disponible<br></br>
                        <input type="checkbox" name="includedServices" value="7" onChange={this.handleChange} /> Baño privado<br></br>
                      </span>
                      

                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      
                      <span className="input-group-text" id='description'>Descripción</span>
                        
                      
                    </div>

                    <textarea
                      name="description"
                      cols="40"
                      rows="10"
                      id="description"
                      name="description"
                      value={this.state.description}
                      onChange={this.handleChange}
                      required
                    >
                    </textarea>

                    
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      
                      <span className="input-group-text" id='rules'>Reglas</span>
                        
                      
                    </div>

                    <textarea
                      name="rules"
                      cols="43"
                      rows="3"
                      id="rules"
                      name="rules"
                      value={this.state.rules}
                      onChange={this.handleChange}
                      required
                    >
                    </textarea>

                    
                  </div>

                  <button type="submit" className="btn btn-residenciapp-green btn-lg btn-block">Registrar Residencia</button>
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

export default CreateStudentHousing;