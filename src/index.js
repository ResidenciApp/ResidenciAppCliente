import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import App from './App';
import LoginView from './views/LoginView/LoginView';
import CheckInView from './views/CheckInView/CheckInView';
import CheckInOwnerView from './views/CheckInOwnerView/CheckInOwnerView';
import CreateStudentHousingView from "./views/CreateStudentHousingView/CreateStudentHousingView"

import './index.css';


const Application = () =>  (
  <BrowserRouter>
    <React.Fragment>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={LoginView} />
      <Route exact path="/registrarse" component={CheckInView} />
      <Route exact path="/registrar-propietario" component={CheckInOwnerView} />
      <Route exact path="/registrar-residencia" component={CreateStudentHousingView}/>
    </React.Fragment>
  </BrowserRouter>
);


ReactDOM.render(
  <Application />,
  document.getElementById('root')
);
