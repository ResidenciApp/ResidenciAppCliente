import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import App from './App';
import LoginView from './views/LoginView/LoginView';
import CheckInView from './views/CheckInView/CheckInView';
import CheckInOwnerView from './views/CheckInOwnerView/CheckInOwnerView';
import CreateStudentHousingView from "./views/CreateStudentHousingView/CreateStudentHousingView";
import OwnerProfileView from "./views/OwnerProfileView/OwnerProfileView";

import './index.css';

import CreateStudentHousingView from './views/CreateStudentHousingView/CreateStudentHousingView'

import NotFound404 from './components/NotFound404/NotFound404';

import './index.css';

import PermissionByRole from './Permission';
import config from './config';


const roles = config.permissionRole;

// Solo puedo acceder a estos componente si el usuario no esta autenticado
var CheckInOwnerViewPermission =  PermissionByRole(CheckInOwnerView, [roles.NOT_AUTHENTICATED]);
var CheckInViewPermission = PermissionByRole(CheckInView, [roles.NOT_AUTHENTICATED]);
var LoginViewPermission = PermissionByRole(LoginView, [roles.NOT_AUTHENTICATED]);
var OwnerProfileViewPermission = PermissionByRole(OwnerProfileView, [roles.NOT_AUTHENTICATED]);

// Solo puedo acceder a estos componente si el usuario tiene el role de 'Propietario'
var CreateSHViewPermission = PermissionByRole(CreateStudentHousingView,
  [roles.OWNER]
);

const Application = () =>  (
  <BrowserRouter>
    <React.Fragment>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={LoginView} />
      <Route exact path="/registrarse" component={CheckInView} />
      <Route exact path="/registrar-propietario" component={CheckInOwnerView} />
      <Route exact path="/registrar-residencia" component={CreateStudentHousingView}/>
      <Route exact path="/perfil-propietario" component={OwnerProfileView}/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={LoginViewPermission} />
        <Route exact path="/registrarse" component={CheckInViewPermission} />
        <Route exact path="/registrar-propietario" component={CheckInOwnerViewPermission} />
        <Route exact path="/perfil-propietario" component={OwnerProfileViewPermission} />
        

        <Route exact path="/registrar-residencia" component={CreateSHViewPermission} />
        <Route component={NotFound404} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);


ReactDOM.render(
  <Application />,
  document.getElementById('root')
);
