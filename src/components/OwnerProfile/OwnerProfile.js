import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

import config from '../../config';

import './OwnerProfile.css';


class OwnerProfile extends Component {

    constructor(props) {
       super(props);

        this.state = {
            username: '',
            name: '',
            lastName: '',
            roleName: '',
            email: '',
            avatar: '',
            age: 0,
            sexo: ''    
        }


        this.handleUpdateData = this.handleUpdateData.bind(this);

        this.handleUpdateData(this.props.match.params.username);
    }

    async handleUpdateData(username) {
        event.preventDefault();

        var path = '/api/v1/users/people/?username=';

        var url = config.urlServer + path + username;

        var user = await axios.get(url)
            .then(response => {
                return response.data[0];
            })
            .catch(error => {
                console.error("Ocurrio un Error 'OwnerProfile.js'")
                return undefined;
            })
        
        var avatar = user.avatar;

        if(avatar) {
            avatar = avatar.replace(/size=[0-9]+/g, 'size=700')
        }
        
        
        this.setState({
            username: user.user.username,
            name: user.user.first_name,
            lastName: user.user.last_name,
            roleName: user.role.name,
            idRole: user.role.id,
            email: user.user.email,
            avatar: avatar,
            age: user.age,
            sex: user.sex    
        })

        console.log(this.state)
        
    }
      
  
  render() {
    return (
     
        <div className="container emp-profile">
            <form method="post">    
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={this.state.avatar} alt=""/>
                            <div className="file btn btn-lg btn-primary">
                                Cambiar foto
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                                    <h5>
                                        {this.state.name + ' ' + this.state.lastName}
                                    </h5>
                                    <h6>
                                        Descripción o biografía
                                    </h6>
                                    <p className="proile-rating">RANKINGS : <span>8/10</span></p>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    Acerca de mí
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>MIS PROPIEDADES</p>
                            <a href="">Propiedad1</a><br/>
                            <a href="">Propiedad2</a><br/>
                            <a href="">Propiedad3</a>
                            
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Nombre de Usuario</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{this.state.username}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Nombre</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{this.state.name + ' ' + this.state.lastName}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{this.state.email}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Teléfono de contacto</label>
                                            </div>
                                            <div className="col-md-6">
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