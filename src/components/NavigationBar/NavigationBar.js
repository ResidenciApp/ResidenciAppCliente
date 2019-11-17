import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

import './NavigationBar.css';
import config from '../../config';
import $ from 'jquery';



export default class NavigationBar extends config{
   
    render(){
        return(
            
            <div class="col-md-12">
            <div class="card acik-renk-form">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-2">
                            <div class="form-group ">
                                <select id="iller" class="form-control" >
                                    <option disabled selected>Ciudad</option>
                                    <option>Bogotá</option>
                                    <option>Medellin</option>
                                    <option>Cali</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group ">
                                <select id="ilceler" class="form-control"  >
                                    <option disabled selected>Localidad</option>
                                    <option>Usaquén</option>
                                    <option>Chapinero</option>
                                    <option>Santa Fe</option>
                                    <option>San Cristóbal</option>
                                    <option>Usme</option>
                                    <option>Tunjuelito</option>
                                    <option>Bosa</option>
                                    <option>Kennedy</option>
                                    <option>Fontibón</option>
                                    <option>Engativá</option>
                                    <option>Suba</option>
                                    <option>Barrios Unidos</option>
                                    <option>Teusaquillo</option>
                                    <option>Los Mártires</option>
                                    <option>Antonio Nariño</option>
                                    <option>Puente Aranda</option>
                                    <option>La Candelaria</option>
                                    <option>Rafael Uribe Uribe</option>
                                    <option>Ciudad Bolívar</option>
                                    <option>Sumapaz</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group ">
                                <input type="text" class="form-control" placeholder="Barrio"/>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group ">
                                <select name="langOpt[]" multiple id="langOpt">
                                    <option value="Energia">Energia</option>
                                    <option value="Agua">Agua</option>
                                    <option value="Gas">Gas</option>
                                    <option value="Internet">Internet</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <button id="gt" type="button" class="btn btn-warning  pl-5 pr-5">Buscar</button>
                        </div>
                    </div>
                    
                   
                </div>
            </div>
            </div>

        
        )
        ('#langOpt').multiselect({
            columns: 1,
            placeholder: 'Servicios',
            search: true,
            selectAll: true
        }) 
    }    
    
}