import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

import './SearchBar.css';
import config from '../../config';
import $ from 'jquery';




export default class SearchBar extends Component{
   
    render(){
        return(
            
            <div class="container py-5 my-5"  >
                <div class="row text-center pb-4">
                     <div class="col-md-12">
                        <h2 class="text-white siyah-cerceve">¡Busca tu residencia aquí!</h2>
                    </div>
                 </div>
            <div class="row">

            <div class="col-md-12">
                <div class="card acik-renk-form">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <h4 class="text-black siyah-cerceve">Ciudad</h4>
                                <div class="form-group ">
                                    <select id="iller" class="form-control" >
                                        <option defaultValue="N">Elegir Ciudad...</option>
                                        <option >Bogotá</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <h4 class="text-black siyah-cerceve">Localidad</h4>
                                <div class="form-group ">
                                    <select id="locality" class="form-control" >
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
                                </div>

                                
                            </div>
                            
                            
                            
                        </div>
                        <div class="row">
                            <div class="col-md-8">
                                    <h4 class="text-black siyah-cerceve">Rango de precio</h4>
                                    <div class="col-md-4">
                                        <input
                                                    type="number"
                                                    className="form-control"
                                                    aria-label="Default"
                                                    aria-describedby="MinPrice"
                                                    placeholder="Mín."
                                                    name="MinPrice"
                                        />
                                    </div>
                                    <div class="col-md-4">
                                        <input
                                                    type="number"
                                                    className="form-control"
                                                    aria-label="Default"
                                                    aria-describedby="MaxPrice"
                                                    placeholder="Máx."
                                                    name="MaxPrice"
                                        />
                                    </div>
                            </div>
                        </div>

                        <div class="row">
                            <h4 class="text-black siyah-cerceve">Servicios Incluidos</h4>
                        </div>
                        <div class="row">
                                <div className="input-group-prepend" >
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
                        
                        <div class="row">
                            <h4 class="text-black siyah-cerceve">Nombre</h4>
                        </div>
                        <div class="row">
                            <div class="col-md-9">
                                <div class="form-group ">
                                    <input type="text" class="form-control" placeholder="¿Tienes el nombre de la residencia que buscas? ¡Escríbelo aquí! (Opcional)"/>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <button type="button"  className="btn btn-residenciapp-green btn-lg btn-block">Buscar</button>
                            </div>
                        </div>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
    

        
        )
        $('#langOpt').multiselect({
            columns: 1,
            placeholder: 'Servicios',
            search: true,
            selectAll: true
        }); 
    }    
    
}