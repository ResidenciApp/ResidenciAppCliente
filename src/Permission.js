import React, { Component } from 'react';

import axios from 'axios';

import config from './config';

import NotFound404 from './components/NotFound404/NotFound404';


export default function PermissionByRole(PassedComponent, roles) {

    var out =  class extends React.Component {

        constructor(props) {
            super(props);
            // Se define en los estados la variable 'role'
            this.state =  {
                role: ''
            }

            // Definición de las funciones utilizadas
            this.getData = this.getData.bind(this);
        }

        componentDidMount() {
            // Obtener el role del usuario y actualizar los estados (this.status)
            this.getData(); 
        } 

    

        async getData() {
            // Obtener Token del LocalStorage
            var token = localStorage.getItem('TOKEN');

            var path = '/api/v1/users/token-role/';
            var url = config.urlServer + path;

            // Hace una consulta POST: /api/v1/users/token-role/
            // Que trae el 'role' y el 'username' del usuario

            // Si hay un token, esto quiere decir que el usuario
            // esta Autenticado, entonces pide al servidor el role
            // del usuario con el que esta asociado el token
            if(token){
                // Petición al servidor
                var data = await axios.post(url, {
                    headers: {
                    Authorization: `Token ${token}`
                    } 
                });

                // Actualizar Estado
                this.setState({
                    role:  data.data.role_name
                })
                
            } else {
                // En caso de que el usuario no este autenticado
                // Actualiza el estado 'role' con NOT_AUTHENTICATED
                this.setState({
                    role:  config.permissionRole.NOT_AUTHENTICATED
                })
            }
        }

        render(){
            var hasRole = false;

            // Verificar que el 'role' del usuario este entre
            // los roles aceptados
            // La verificación es Lineal, pero como son muy pocos roles
            // es eficiente
            for(var x of roles) {
                if(x == this.state.role) {
                    hasRole = true;
                    break;
                }
            }

            // Si el usuario tiene el role requerido entonces
            // se muestra el componente
            // En caso contrario muestra el componente
            // con el Error 404 Not Found
            if(hasRole) {
                return (
                    <div>
                        <PassedComponent/>
                    </div>
                )
            } else return <NotFound404 />;
        }
    }

    return out;
}
