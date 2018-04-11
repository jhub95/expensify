import {
    setStartDate,
    setEndDate,
    setTextFilter,
    sortByAmount,
    sortByDate
} from './../../actions/filters';
import moment from 'moment';

describe('actions/filters file',()=>{

    test('should generate set start date action object',()=>{
        const action = setStartDate(moment(0));
        expect(action).toEqual({
            type: 'SET_START_DATE',
            date: moment(0)
        })
    });

    test('should generate set end date action object',()=>{
        const action = setEndDate(moment(0));
        expect(action).toEqual({
            type: 'SET_END_DATE',
            date: moment(0)
        })
    });

    test('should set text filter to value',()=>{
        const action = setTextFilter("bill");
        expect(action).toEqual({
            type:'SET_TEXT_FILTER',
            text:'bill'
        });
    });

    test('should set text filter to default',()=>{
        const action = setTextFilter();
        expect(action).toEqual({
            type:'SET_TEXT_FILTER',
            text:''
        });
    });

    test('should sort by amount',()=>{
        const action = sortByAmount();
        expect(action).toEqual({
            type: 'SORT_BY_AMOUNT'
        });
    });

    test('should sort by date',()=>{
        const action = sortByDate();
        expect(action).toEqual({
            type: 'SORT_BY_DATE'
        });
    });

});