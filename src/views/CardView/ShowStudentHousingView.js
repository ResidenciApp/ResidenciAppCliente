import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import config from '../../config';

import Navigation from '../../components/Navigation/Navigation'
import ShowStudentHousing from '../../components/Card/ShowStudentHousing';
import Footer from '../../components/Footer/Footer'

class ShowStudentHousingView extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            name: '',
            services: [
              'Limpieza',
              'Cocina disponible',
              'Baño privado',
              'Alimentación',
              'Internet',
              'Lavandería',
              'Cable TV'
            ],
            description: 'Pequeña descripción de la Residencia',
            price: 0,
            img: '',
            city: 'Bogotá D.C.',
            address: 'Calle 56 N° 23 - 34'
        }
    
        console.log(this.props.match.params.id)
        this.handleData = this.handleData.bind(this);
    
        this.handleData();
    }

    async handleData() {
        var path = '/api/v1/student_housing/residence_publication/'+ this.props.match.params.id;
        var url = config.urlServer + path;


        var data = await axios.get(url);
        var publication = undefined;

        if(data.status == 200) {
            publication = data.data;

            this.setState({
                name: publication.name,
                price: publication.price,
                img: publication.photo,
            })
        }

    }



    render() {

        return (
            <div className="App">

                <Navigation />

                <ShowStudentHousing
                    img={this.state.img}
                    name={this.state.name}
                    description={this.state.description}
                    services={this.state.services}
                    price={this.state.price}
                    city={this.state.city}
                    address={this.state.address}
                />

                <Footer />
            </div>
        )
    }

}

export default withRouter(ShowStudentHousingView);