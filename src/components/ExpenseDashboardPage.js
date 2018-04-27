import React from 'react';

import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';
import selectExpenses from './../selectors/expenses';

export const ExpenseDashboardPage = (props) => {
    console.log(props);
    return(
        <div>
        <ExpenseSummary />
        <ExpenseListFilters />
        <ExpenseList />
        </div>
    );
}

export default ExpenseDashboardPage;