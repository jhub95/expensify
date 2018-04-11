import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from './../../components/ExpenseListFilters';
import {filters,altFilters} from './../fixtures/filters';
import { ENETRESET } from 'constants';
import moment from 'moment';

let setTextFilterSpy, sortByDateSpy, sortByAmountSpy, setStartDateSpy, setEndDateSpy, wrapper;

beforeEach(()=>{
    setTextFilterSpy = jest.fn();
    sortByDateSpy = jest.fn();
    sortByAmountSpy = jest.fn();
    setStartDateSpy = jest.fn();
    setEndDateSpy = jest.fn();
    wrapper = shallow(<ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilterSpy}
        sortByAmount={sortByAmountSpy}
        sortByDate={sortByDateSpy}
        setEndDate={setEndDateSpy}
        setStartDate={setStartDateSpy}
        />);
});

describe('from ExpenseListFilters file',()=>{

    test('should render ExpenseListFilters correctly',()=>{
        expect(wrapper).toMatchSnapshot();

    });

    test('should render ExpenseListFilters with alt data correctly',()=>{
        wrapper.setProps({
            filters:altFilters
        });
        expect(wrapper).toMatchSnapshot();
    });

    test('should handle a text change',()=>{
        const value = "candy";
        wrapper.find('#textSearch').simulate('change',{
            target: {value}
        });
        expect(setTextFilterSpy).toHaveBeenLastCalledWith(value);
    });

    test('should sort by date',()=>{
        const value="date";
        wrapper.find('#sortBy').simulate('change',{
            target: {value}
        });
        expect(sortByDateSpy).toHaveBeenCalled();
        expect(sortByAmountSpy).not.toHaveBeenCalled();
    });

    test('should sort by amount',()=>{
        const value="amount";
        wrapper.find('#sortBy').simulate('change',{
            target: {value}
        });
        expect(sortByDateSpy).not.toHaveBeenCalled();
        expect(sortByAmountSpy).toHaveBeenCalled();
    });

    test('should handle date changes',()=>{
        const startDate = moment(0).add(4,'years');
        const endDate = moment(0).add(8,'years');
        const dates = {
            startDate:"444444",
            endDate:"555555"
        };
        wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate});
        expect(setStartDateSpy).toHaveBeenLastCalledWith(startDate);
        expect(setEndDateSpy).toHaveBeenLastCalledWith(endDate);
    });

    test('should handle date focus change',()=>{
        const calendarFocused = 'endDate';
        wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
        expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
    });
});