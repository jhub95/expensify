import {shallow} from 'enzyme';
import React from 'react';
import {Header} from './../../components/Header';


describe('from components/header.js file',()=>{

    test('should render Header correctly',()=>{
        const wrapper = shallow(<Header startLogout={()=>{}}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('should fire startLogout on button click',()=>{
        const logoutSpy = jest.fn();
        const wrapper = shallow(<Header startLogout={logoutSpy}/>);
        wrapper.find('#logoutButton').simulate('click',{
            preventDefault:()=>{}
        });
        expect(logoutSpy).toHaveBeenCalled();
    });

});