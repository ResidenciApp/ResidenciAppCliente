import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import App from './App';
import LoginView from './views/LoginView/LoginView';
import CheckInView from './views/CheckInView/CheckInView';
import CheckInOwnerView from './views/CheckInOwnerView/CheckInOwnerView';
import OwnerProfileView from "./views/OwnerProfileView/OwnerProfileView";
import CreateStudentHousingView from './views/CreateStudentHousingView/CreateStudentHousingView'

import NotFound404 from './components/NotFound404/NotFound404';

import './index.css';

import PermissionByRole from './Permission';
import config from './config';


const roles = config.permissionRole;

// Solo puedo acceder a estos componente si el usuario no esta autenticado
var AppViewPermission =  PermissionByRole(App, [roles.NOT_AUTHENTICATED]);
var CheckInOwnerViewPermission =  PermissionByRole(CheckInOwnerView, [roles.NOT_AUTHENTICATED]);
var CheckInViewPermission = PermissionByRole(CheckInView, [roles.NOT_AUTHENTICATED]);
var LoginViewPermission = PermissionByRole(LoginView, [roles.NOT_AUTHENTICATED]);
var OwnerProfileViewPermission = PermissionByRole(OwnerProfileView, [roles.NOT_AUTHENTICATED]);

// Solo puedo acceder a estos componente si el usuario tiene el role de 'Propietario'
var CreateSHViewPermission = PermissionByRole(CreateStudentHousingView,[roles.OWNER]);

const Application = () =>  (
  <BrowserRouter>
    <React.Fragment>
    <Switch>
        <Route exact path="/" component={AppViewPermission} />
        <Route exact path="/login" component={LoginViewPermission} />
        <Route exact path="/registrarse" component={CheckInViewPermission} />
        <Route exact path="/registrar-propietario" component={CheckInOwnerViewPermission} />
        <Route exact path="/registrar-residencia" component={CreateSHViewPermission}/>
        <Route exact path="/perfil-propietario/:username" component={OwnerProfileViewPermission}/>
        <Route component={NotFound404} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);


ReactDOM.render(
  <Application />,
  document.getElementById('root')
);
