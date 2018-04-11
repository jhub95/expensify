import React from 'react';
import expenses from './../fixtures/expenses';
import {ExpenseSummary} from './../../components/ExpenseSummary';
import {shallow} from 'enzyme';

describe('from components/ExpenseSummary',()=>{

    test('should return null if no expenses',()=>{
        const wrapper = shallow(<ExpenseSummary expenses={[]} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should return declaration of expenses count and sum',()=>{
        const wrapper = shallow(<ExpenseSummary expenses={expenses} />);
        expect(wrapper).toMatchSnapshot();
    });

});