import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseDashboardPage} from './../../components/ExpenseDashboardPage';

describe('from components/ExpenseDashboardPage',()=>{
    test('should render ExpenseDashboardPage',()=>{
        const wrapper = shallow(<ExpenseDashboardPage expenses={[]} />);
        expect(wrapper).toMatchSnapshot();
    });
});