import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import './NotFound404.css';

class NotFound404 extends Component {

    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div className="container">
                <br />
                <br />
                <br />
                <div className="row justify-content-center">
                    <div className="col-4 text-center">
                        <h1>Not Found
                            <span className="badge badge-secondary">
                                404
                            </span>
                        </h1>

                        <h3 className="text-center">
                            <span class="badge badge-primary">
                                <a className="badge" href="/" style={{color: "#fff"}}>
                                    <i class="fas fa-home"></i> Ir a la pagina principal
                                </a>
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(NotFound404);