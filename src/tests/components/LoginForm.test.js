import React from "react";
import {shallow} from 'enzyme';
import {LoginForm} from './../../components/LoginForm';

describe('from loginform page',()=>{

    test('should correctly show login page',()=>{
        const wrapper = shallow(<LoginForm />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should fire startLogin on button click',()=>{
        const loginSpy = jest.fn();
        const wrapper = shallow(<LoginForm startLogin={loginSpy}/>);
        wrapper.find('#loginButton').simulate('click',{
            preventDefault:()=>{}
        });
        expect(loginSpy).toHaveBeenCalled();
    });

});