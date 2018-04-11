import {filtersReducer} from './../../reducers/filters';
import moment from 'moment';

describe('reducers/filters file',()=>{
    test('should setup default filter values',()=>{
        const state = filtersReducer(undefined,{type:'@@INIT'});
        expect(state).toEqual({
            text: '',
            sortBy: 'date',
            startDate: moment().startOf('month'),
            endDate: moment().endOf('month')
        });
    });

    test('should sort by amount',()=>{
        const state = filtersReducer(undefined,{type:'SORT_BY_AMOUNT'});
        expect(state.sortBy).toBe('amount');
    });

    test('should sort by date',()=>{
        const currentState = {
            text: '',
            sortBy: 'amount',
            startDate: undefined,
            endDate: undefined
        };
        const state = filtersReducer(currentState,{type:'SORT_BY_DATE'});
        expect(state.sortBy).toBe('date');
    });

    test('should set filter by text',()=>{
        const texter = 'bubba';
        const state = filtersReducer(undefined,{type:'SET_TEXT_FILTER',text:texter});
        expect(state.text).toBe(texter);
    });

    test('should set start date',()=>{
        const dater = moment(0);
        const state = filtersReducer(undefined,{
            type:'SET_START_DATE',date:dater
        });
        expect(state.startDate).toBe(dater);
    });
    
    test('should set end date',()=>{
        const dater = moment(0);
        const state = filtersReducer(undefined,{
            type:'SET_END_DATE', date:dater
        });
        expect(state.endDate).toBe(dater);
    });

});