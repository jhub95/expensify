import moment from 'moment';

const filterReducerDefaultState={
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

export const filtersReducer = (state=filterReducerDefaultState, {type,text,date}=action) =>{
    switch (type) {
     case 'SET_TEXT_FILTER':
        return {...state,text};
     case 'SORT_BY_AMOUNT':
        return {...state,sortBy:'amount'};
     case 'SORT_BY_DATE':
        return {...state,sortBy:'date'};
     case 'SET_START_DATE':
        return {...state, startDate:date};
     case 'SET_END_DATE':
        return {...state, endDate:date};
     default:
        return state;
    }
};