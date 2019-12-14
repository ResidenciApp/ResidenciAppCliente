import React from 'react';
import footer from '../src/components/Footer/Footer.js';
import {shallow } from 'enzyme';

import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});

it('Renders without crashing', () => {
    shallow(<footer />);
});

/*it('clic in residenciapp.com', ()=>{
   const wapper= mount()
});*/