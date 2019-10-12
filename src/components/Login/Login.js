import React, { Component } from 'react';

import './Login.css';

export default class Login extends Component {
  render() {
    return (
      <div className="container login">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <br/>

            <div className="card">
              <div className="card-header">
                <h3 className="text-center title-login">Iniciar <span class="badge badge-residenciapp-green">Sesión</span></h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                
                  <button type="submit" className="btn btn-residenciapp-green btn-lg btn-block">Submit</button>
                </form>
              </div>
            </div>


          </div>
        </div>
      </div>
    )
  }
}
