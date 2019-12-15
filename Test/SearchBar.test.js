import React from 'react';
import SearchBar from '../src/components/SearchBar/SearchBar.js';
import {shallow } from 'enzyme';

import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

it('Renders without crashing', () => {
    shallow(<SearchBar />);
});