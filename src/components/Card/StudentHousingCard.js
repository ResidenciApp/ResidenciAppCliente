import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';


import './StudentHousingCard.css';

class StudentHousingCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="col-md-4">
        <figure className="card card-product">

          <div className="img-wrap">
            <img src={this.props.img} />
          </div>

          <figcaption className="info-wrap">
          
            <h4 className="title">
              {this.props.title}
            </h4>
                    
            <p className="desc">{this.props.desc}</p>

            <div className="rating-wrap">
              <div className="label-rating">{this.props.review}</div>
              <div className="label-rating">{this.props.orders}</div>
            </div>

          </figcaption>

          <div className="bottom-wrap">

            <a href={this.props.url} className="btn btn-sm btn-residenciapp float-right">Ver Mas</a>	

            <div className="price-wrap h5">

              <span className="price-new">
                {this.props.price}
              </span>
              
              {
                this.props.price_old?
                  <del className="price-old">{this.props.price_old}</del>
                :
                  <div></div>
              }
              
            </div>

          </div>

      </figure>
      </div>
    )
  }
}

export default withRouter(StudentHousingCard);