import React from 'react';
import {shallow } from 'enzyme';

import OwnerProfile from './../OwnerProfile';

import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});



it("Renders without crashing", () =>{

    shallow(<OwnerProfile />);
})