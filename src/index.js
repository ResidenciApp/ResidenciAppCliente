import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import App from './App';
import LoginView from './views/LoginView/LoginView';
import CheckInView from './views/CheckInView/CheckInView';
import CheckInOwnerView from './views/CheckInOwnerView/CheckInOwnerView';
import OwnerProfileView from "./views/OwnerProfileView/OwnerProfileView";
import CreateStudentHousingView from './views/CreateStudentHousingView/CreateStudentHousingView';
import NavigationBar from './views/NavigationBarView/NavigationBarView';

import NotFound404 from './components/NotFound404/NotFound404';

import './index.css';

import PermissionByRole from './Permission';
import config from './config';


const roles = config.permission;


// Solo puedo acceder a estos componente si el usuario no esta autenticado
var AppViewPermission =  PermissionByRole(App                      , roles.ANY_USER);
var CheckInOwnerViewPermission =  PermissionByRole(CheckInOwnerView, roles.ANY_USER);
var CheckInViewPermission = PermissionByRole(CheckInView           , roles.ANY_USER);
var LoginViewPermission = PermissionByRole(LoginView               , roles.ANY_USER);
var OwnerProfileViewPermission = PermissionByRole(OwnerProfileView , roles.ANY_USER);
var NavigationBarViewPermission = PermissionByRole(NavigationBar , roles.ANY_USER);

// Solo puedo acceder a estos componente si el usuario tiene el role de 'Propietario'
var CreateSHViewPermission = PermissionByRole(CreateStudentHousingView, roles.ONLY_OWNER);

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
        <Route exact path="/search" component={NavigationBarViewPermission}/>
        <Route component={NotFound404} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);


ReactDOM.render(
  <Application />,
  document.getElementById('root')
);
