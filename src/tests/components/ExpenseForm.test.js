import React from 'react';
import moment from 'moment';
import {shallow} from 'enzyme';
import ExpenseForm from './../../components/ExpenseForm';
import expenses from './../fixtures/expenses';

describe('from components/ExpenseForm file',()=>{

    test('should render ExpenseForm correctly with defaults',()=>{
        const wrapper = shallow(<ExpenseForm />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should render ExpenseForm with expense data inputted',()=>{
        const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should render error for invalid form submission',()=>{
        const wrapper = shallow(<ExpenseForm />);
        expect(wrapper).toMatchSnapshot();
        wrapper.find('form').simulate('submit',{
            preventDefault:()=>{}
        });
        expect(wrapper.state('errorMessage').length).toBeGreaterThan(0);
        expect(wrapper).toMatchSnapshot();

    });

    test('should set description on input change',()=>{
        const value = "new description";
        const wrapper = shallow(<ExpenseForm />);
        wrapper.find('#description').simulate('change',{
            target: {value}
        });
        expect(wrapper.state('description')).toBe(value);
    });

    test('should set note on textarea change',()=>{
        const value = "new note";
        const wrapper = shallow(<ExpenseForm />);
        wrapper.find('#note').simulate('change',{
            target: {value}
        });
        expect(wrapper.state('note')).toBe(value);
    });

    test('should set amount if valid input',()=>{
        const value = "12.50";
        const wrapper = shallow(<ExpenseForm />);
        wrapper.find('#amount').simulate('change',{
            target: {value}
        });
        expect(wrapper.state('amount')).toBe(value);
    });

    test('should not set amount if invalid input',()=>{
        const invalidValue = "12.555";
        const validValue = (expenses[0].amount/100).toString();
        const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
        expect(wrapper.state('amount')).toBe( validValue );
        wrapper.find('#amount').simulate('change',{
            target: {invalidValue}
        });
        expect(wrapper.state('amount')).toBeUndefined();
    });

    test('should call onSubmit prop for valid form submission',()=>{
        const onSubmitSpy = jest.fn();
        const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
        wrapper.find('form').simulate('submit',{
            preventDefault:()=>{}
        });
        expect(wrapper.state('errorMessage')).toBe('');
        expect(onSubmitSpy).toHaveBeenLastCalledWith({
            description: expenses[0].description,
            amount: expenses[0].amount,
            note: expenses[0].note,
            createdAt: expenses[0].createdAt
        });
    });

    test('should set new date on date change',()=>{
        const now = moment();
        const wrapper = shallow(<ExpenseForm />);
        wrapper.find('SingleDatePicker').prop('onDateChange')(now);
        expect(wrapper.state('createdAt')).toEqual(now);
    });

    test('should set focus on date picker upon focus',()=>{
        const wrapper = shallow(<ExpenseForm />);
        wrapper.find('SingleDatePicker').prop('onFocusChange')({focused:true});
        expect(wrapper.state('calendarFocused')).toBeTruthy();
    });
    
});