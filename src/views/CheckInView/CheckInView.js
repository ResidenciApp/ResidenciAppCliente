import React, { Component } from 'react';

import Navigation from '../../components/Navigation/Navigation';
import CheckIn from '../../components/CheckIn/CheckIn';
import Footer from '../../components/Footer/Footer';

export default class CheckInView extends Component {
  render() {
    return (
      <div className="checkinview">
        <Navigation />

        <CheckIn />

        <Footer />
      </div>
    )
  }
}
