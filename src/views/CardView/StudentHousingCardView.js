import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

import config from '../../config';

import StudentHousingCard from '../../components/Card/StudentHousingCard';

class StudentHousingCardView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      residences: []
    }


    this.handle = this.handle.bind(this);

    this.handle();
  }

  async handle() {
    var url = config.urlServer + '/api/v1/student_housing/residence_publication/';

    var response = await axios.get(url);
    var data = response.data;

    this.setState({
      residences: data
    })

  }

  render() {

    var elements = this.state.residences;
    return (
      <div id="StudentHousingCardView" className="container">

        <br/>
        <br/>
        <br/>
        
        <div className="row justify-content-center">
          <div className="col-7">

            <h2 align="center" >
              <strong>
                Los sitios mejor valorados para alojarse
              </strong>
            </h2>

            <blockquote className="blockquote text-center">

              <footer className="blockquote-footer">
                Explora alguna de las residencias con mejor valoración de la ciudad
              </footer>

            </blockquote>

          </div>
        </div>

        <div className="card">
          <div className="card-body">
          

            {
              this.state.residences.length > 0?
              
              <div className="row">
              

                {this.state.residences.map((value, index) => {
                  return <StudentHousingCard
                    title={value.name}
                    img={value.photo}
                    desc="Pequeña descripción de la Residencia"
                    review="152 reviews"
                    orders="154 orders"
                    url={"/residencia/" + value.id}
                    price={value.price}
                  />
                })}
              </div>
              :
              <div className="row">
            <StudentHousingCard
              title="Nombre de la Residencia"
              img="https://vivienda.uniandes.edu.co/images/img/Individual_04.jpg"
              desc="Pequeña descripción de la Residencia"
              review="152 reviews"
              orders="154 orders"
              url="#"
              price="$1.280.000"
              owner="lmbaeza"
            />

            <StudentHousingCard
              title="Nombre de la Residencia"
              img="https://vivienda.uniandes.edu.co/images/img/Suite_01.jpg"
              desc="Pequeña descripción de la Residencia"
              review="152 reviews"
              orders="154 orders"
              url="#"
              price="$1.280.000"
              owner="lmbaeza"
            />

            <StudentHousingCard
              title="Nombre de la Residencia"
              img="https://vivienda.uniandes.edu.co/images/img/Suite_02.jpg"
              desc="Pequeña descripción de la Residencia"
              review="152 reviews"
              orders="154 orders"
              url="#"
              price="$1.280.000"
              owner="lmbaeza"
            />

            <StudentHousingCard
              title="Nombre de la Residencia"
              img="https://vivienda.uniandes.edu.co/images/img/Suite_04.jpg"
              desc="Pequeña descripción de la Residencia"
              review="152 reviews"
              orders="154 orders"
              url="#"
              price="$1.280.000"
              owner="lmbaeza"
            />

            <StudentHousingCard
              title="Nombre de la Residencia"
              img="https://vivienda.uniandes.edu.co/images/img/Individual_02.jpg"
              desc="Pequeña descripción de la Residencia"
              review="152 reviews"
              orders="154 orders"
              url="#"
              price="$1.280.000"
              owner="lmbaeza"
            />

            <StudentHousingCard
              title="Nombre de la Residencia"
              img="https://vivienda.uniandes.edu.co/images/img/Doble_06.jpg"
              desc="Pequeña descripción de la Residencia"
              review="152 reviews"
              orders="154 orders"
              url="#"
              price="$1.980.000"
            />
            </div>
            }

          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(StudentHousingCardView);