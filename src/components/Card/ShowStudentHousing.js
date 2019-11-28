import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import NumberFormat from 'react-number-format';


import './ShowStudentHousing.css';

class ShowStudentHousing extends Component {

    constructor(props) {
        super(props);

        this.handleService = this.handleService.bind(this);
    }

    handleService(index, data) {
        if((index + 1) % 3 == 0) {
            return (
                <a class="success">{data.name}</a>
            )
        } else if((index + 1) % 3 == 1) {
            return (
                <a class="primary">{data.name}</a>
            )
        } else {
            return (
                <a class="warning">{data.name}</a>
            )
        }
    }


    render() {

        return(
            <div class="container">
                <div class="card card-show">
                    <div class="container-fliud">
                        <div class="wrapper row">
                            <div class="preview col-md-6">

                                <div class="preview-pic tab-content">
                                    <div class="tab-pane active" id="pic-1">
                                        <img src={this.props.img} />
                                    </div>
                                </div>

                            </div>
                            <div class="details col-md-6">
                                <div class="panel panel-default text-center">
                                    <h3 class="h3">
                                        <i class="fas fa-home"></i>
                                    </h3>
                                    <hr />
                                    <h3>{this.props.name}</h3>
                                </div>
                                <div class="panel panel-default text-center">
                                    <div class="rating">
                                        <h3 class="h3">
                                            <i class="fas fa-concierge-bell"></i> Servicios
                                        </h3>
                                        <hr />
                                        <div>
                                            <div class="tags">
                                                {
                                                    this.props.services.map((data, index) => {
                                                        return this.handleService(index, data);
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default text-center ">
                                    <h3 class="h3">
                                        <i class="fas fa-file-alt"></i> Descripción
                                    </h3>
                                    <hr />
                                    <p>{this.props.description}</p>
                                </div>
                                <div class="panel panel-default text-center ">
                                    <h3 class="h3">
                                        <i class="fas fa-money-bill-alt "></i> Valor
                                    </h3>
                                    <hr />
                                    <h2>
                                        <font color="#007bff">

                                            <NumberFormat
                                                value={this.props.price}
                                                displayType={'text'}
                                                suffix={' COP'}
                                                thousandSeparator={true}
                                                prefix={'$ '}
                                            />

                                        </font>
                                    </h2>
                                </div>
                                <div class="panel panel-default text-center ">
                                    <h3 class="h3">
                                        <i class="fas fa-map-marker-alt"></i> Localización
                                    </h3>
                                    <ul class="list-group">
                                        <li class="list-group-item text-left">
                                            <h4>
                                                <span class="badge badge-success">
                                                    <i class="fas fa-city"></i> Ciudad:
                                                </span> {this.props.city}
                                            </h4>
                                        </li>
                                        <li class="list-group-item text-left">
                                            <h4>
                                                <span class="badge badge-primary">
                                                    <i class="fas fa-location-arrow"></i> Dirección:
                                                </span> {this.props.address}
                                            </h4>
                                        </li>
                                    </ul>
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>
        )
    }

}

export default withRouter(ShowStudentHousing);