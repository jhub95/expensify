import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense,removeExpense,editExpense} from './actions/expenses';
import {sortByAmount,sortByDate,setEndDate,setStartDate,setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
});
const expense1 = store.dispatch(addExpense({
    description:'water bill',amount:100,createdAt:100
}));
const expense2 = store.dispatch(addExpense({
    description:'gas bill',amount:276,createdAt:150
}));
const expense3 = store.dispatch(addExpense({
    description:'electricity bill',amount:400,createdAt:130
}));

// console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));