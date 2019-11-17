import React from 'react';
import ReactDOM from 'react-dom';
import OwnerProfile from './../OwnerProfile';

it("Renders without crashing", () =>{
    const div = document.createElement("div");
    ReactDOM.render(<OwnerProfile/>,div)
})