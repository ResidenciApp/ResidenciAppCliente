import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import App from './App';
import LoginView from './views/LoginView';
import './index.css';

const Application = () =>  (
  <BrowserRouter>
    <React.Fragment>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={LoginView} />
    </React.Fragment>
  </BrowserRouter>
);


ReactDOM.render(
  <Application />,
  document.getElementById('root')
);
