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
                    <div className="col-4">
                        <h1>Not Found
                            <span className="badge badge-secondary">
                                404
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(NotFound404);