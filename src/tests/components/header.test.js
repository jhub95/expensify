import {shallow} from 'enzyme';
import React from 'react';
import Header from './../../components/Header';


describe('from components/header.js file',()=>{

    test('should render Header correctly',()=>{
        const wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
    });


});