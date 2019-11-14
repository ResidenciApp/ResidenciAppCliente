import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

import config from '../../config';

import './OwnerProfile.css';


class OwnerProfile extends Component {

    constructor(props) {
       super(props);
    }    
      
  
  render() {
    return (
     
        <div class="container emp-profile">
            <form method="post">    
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="https://image.flaticon.com/icons/svg/646/646641.svg" alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Cambiar foto
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                        Nombre Propietario 
                                    </h5>
                                    <h6>
                                        Descripción o biografía
                                    </h6>
                                    <p class="proile-rating">RANKINGS : <span>8/10</span></p>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    Acerca de mí
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            <p>MIS PROPIEDADES</p>
                            <a href="">Propiedad1</a><br/>
                            <a href="">Propiedad2</a><br/>
                            <a href="">Propiedad3</a>
                            
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Id de Usuario</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Propietario1</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Nombre</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Propietario</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>propietario1@gmail.com</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Teléfono de contacto</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>123 456 7890</p>
                                            </div>
                                        </div>
                                        
                            </div>
                            
                        </div>
                    </div>
                </div>
            </form>           
        </div>
    )
  }
}

export default withRouter(OwnerProfile);