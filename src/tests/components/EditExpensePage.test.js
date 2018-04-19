import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from './../../components/EditExpensePage';
import expenses from './../fixtures/expenses';

let editExpenseSpy, removeExpenseSpy, history, wrapper;

beforeEach(()=>{
    editExpenseSpy = jest.fn();
    removeExpenseSpy = jest.fn();
    history = {push:jest.fn()};
    wrapper = shallow(<EditExpensePage 
        expense={expenses[1]}
        id={expenses[1].id}
        startEditExpense={editExpenseSpy}
        startRemoveExpense={removeExpenseSpy}
        history={history}
         />);
});

describe('from component EditExpensePage',()=>{

    test('should render edit expense page correctly',()=>{
        expect(wrapper).toMatchSnapshot();
    });

    test('should handle onSubmit edit',()=>{
        wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1].id,expenses[1]);
        expect(history.push).toHaveBeenLastCalledWith('/');
        expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[1].id,expenses[1].id);
    });

    test('should handle onClick remove expense',()=>{
        wrapper.find('button').simulate('click',{
            preventDefault:()=>{}
        });

        expect(history.push).toHaveBeenLastCalledWith('/');
        expect(removeExpenseSpy).toHaveBeenLastCalledWith(expenses[1].id);
    });
});