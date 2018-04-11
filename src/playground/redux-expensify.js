import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// const demoState = {
//     expenses: [{
//         id:'lkjalsd',
//         description: 'january rent',
//         note: 'about that rent, hopefully it doesnt increase',
//         amount: 54500,
//         createdAt: 0
//     }],
//     filters:{
//         text: 'rent',
//         sortBy: 'amount', //date or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// };




// Reducers






// Actions






store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
});

const expense1 = store.dispatch(addExpense({
    description:'Rent and coffee',amount:100,createdAt:100
}));

const expense2 = store.dispatch(addExpense({
    description:'coffee',amount:300,createdAt:150
}));

// const remove1 = store.dispatch(removeExpense({
//     id:expense1.expense.id
// }));

// const edit1 = store.dispatch(
//     editExpense(expense2.expense.id, {amount:500}
// ));

// const filter1 = store.dispatch(
//     setTextFilter('rent')
// );

const amountSort1 = store.dispatch(sortByAmount());

// const dateSort1 = store.dispatch(sortByDate());

// const startDate1 = store.dispatch(setStartDate(0));
// const startDate2 = store.dispatch(setStartDate());

// const endDate1 = store.dispatch(setEndDate(999));
// const endDate2 = store.dispatch(setEndDate());