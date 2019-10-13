import React, { Component } from 'react';

import Navigation from '../../components/Navigation/Navigation';
import CheckInOwner from '../../components/CheckInOwner/CheckInOwner';
import Footer from '../../components/Footer/Footer';

export default class CheckInOwnerView extends Component {
  render() {
    return (
      <div className="checkinownerview">
        <Navigation />

        <CheckInOwner />

        <Footer />

      </div>
    )
  }
}
