import React, { Component } from 'react';

import Navigation from '../../components/Navigation/Navigation';
import CreateStudentHousing from '../../components/CreateStudentHousing/CreateStudentHousing';
import Footer from '../../components/Footer/Footer';

export default class CreateStudentHousingView extends Component {
  render() {
    return (
      <div className="createstudenthousing">
        <Navigation />

        <CreateStudentHousing />

        <Footer />

      </div>
    )
  }
}
