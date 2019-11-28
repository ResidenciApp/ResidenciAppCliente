import React, { Component } from 'react';

import Navigation from '../../components/Navigation/Navigation';
import OwnerProfile from '../../components/OwnerProfile/OwnerProfile';
import Footer from '../../components/Footer/Footer';


export default class OwnerProfileView extends Component {

  constructor(props) {
    super(props);
    console.log("View : ", this.props)
  }

  render() {
    return (
      <div className="ownerprofile">
        <Navigation />

        <OwnerProfile />

        <Footer />

      </div>
    )
  }
}