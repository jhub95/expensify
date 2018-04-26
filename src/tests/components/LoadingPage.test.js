import React from 'react';
import {shallow} from 'enzyme';
import LoadingPage from './../../components/LoadingPage';

describe('from components/LoadingPage',()=>{
    test('should render LoadingPage gif',()=>{
        const wrapper = shallow(<LoadingPage  />);
        expect(wrapper).toMatchSnapshot();
    });
});