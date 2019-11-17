import React, { Component } from 'react';

import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="page-footer font-small  darken-3">
        <div className="container">


<div className="row justify-content-center">

  
  <div className="col-md-5 py-5">
    <div className="mb-5 flex-center">

      
      <a className="fb-ic">
        <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
      </a>
      
      <a className="tw-ic">
        <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
      </a>
      
      <a className="gplus-ic">
        <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
      </a>
      
      <a className="li-ic">
        <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
      </a>
     
      <a className="ins-ic">
        <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
      </a>
      
      <a className="pin-ic">
        <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
      </a>
    </div>
  </div>
  
</div>


</div>

<div className="footer-copyright text-center py-3">
<h5>De LATAM con <span className="badge badge-secondary love"><i className="fas fa-heart"></i></span> para el mundo</h5>
<a className="badge badge-light badge-residenciapp" href="residenciapp.herokuapp.com">residenciapp.com</a>
</div>

      </div>
    )
  }
}
