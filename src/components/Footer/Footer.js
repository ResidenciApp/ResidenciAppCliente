import React, { Component } from 'react';

import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="page-footer font-small  darken-3">
        <div class="container">


<div class="row justify-content-center">

  
  <div class="col-md-5 py-5">
    <div class="mb-5 flex-center">

      
      <a class="fb-ic">
        <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
      </a>
      
      <a class="tw-ic">
        <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
      </a>
      
      <a class="gplus-ic">
        <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
      </a>
      
      <a class="li-ic">
        <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
      </a>
     
      <a class="ins-ic">
        <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
      </a>
      
      <a class="pin-ic">
        <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
      </a>
    </div>
  </div>
  
</div>


</div>

<div class="footer-copyright text-center py-3">
<h5>De LATAM con <span class="badge badge-secondary love"><i class="fas fa-heart"></i></span> para el mundo</h5>
<a className="badge badge-light badge-residenciapp" href="residenciapp.herokuapp.com">residenciapp.com</a>
</div>

      </div>
    )
  }
}
