import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import App from './App';
import LoginView from './views/LoginView/LoginView';
import CheckInView from './views/CheckInView/CheckInView';
import CheckInOwnerView from './views/CheckInOwnerView/CheckInOwnerView';
import NotFound404 from './components/NotFound404/NotFound404';

import './index.css';

import PermissionByRole from './Permission';
import config from './config';

const roles = config.permissionRole;

// Solo puedo acceder a estos componente si el usuario no esta autenticado
var CheckInOwnerViewPermission =  PermissionByRole(CheckInOwnerView, [roles.NOT_AUTHENTICATED]);
var CheckInViewPermission = PermissionByRole(CheckInView, [roles.NOT_AUTHENTICATED]);
var LoginViewPermission = PermissionByRole(LoginView, [roles.NOT_AUTHENTICATED]);

const Application = () =>  (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={LoginViewPermission} />
        <Route exact path="/registrarse" component={CheckInViewPermission} />
        <Route exact path="/registrar-propietario" component={CheckInOwnerViewPermission} />
        <Route component={NotFound404} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);


ReactDOM.render(
  <Application />,
  document.getElementById('root')
);
