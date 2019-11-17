import React from 'react';
import ReactDOM from 'react-dom';
import CreateStudentHousing from './../CreateStudentHousing';



it("Renders without crashing", () =>{
    const div = document.createElement("div");
    ReactDOM.render(<CreateStudentHousing/>,div)
})

