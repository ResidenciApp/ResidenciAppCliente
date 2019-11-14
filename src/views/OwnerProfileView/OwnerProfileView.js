import React, { Component } from 'react';

import Navigation from '../../components/Navigation/Navigation';
import OwnerProfile from '../../components/OwnerProfile/OwnerProfile';
import Footer from '../../components/Footer/Footer';


export default class OwnerProfileView extends Component {
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