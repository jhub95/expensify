import React from 'react';
import { connect } from 'react-redux';

import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';
import selectExpenses from './../selectors/expenses';

export const ExpenseDashboardPage = (props) => {
    console.log(props);
    return(
        <div>
        <ExpenseSummary />
        {props.expenses.length > 0 ? <ExpenseListFilters /> : ''}
        <ExpenseList />
        </div>
    );
}

const mapStateToProps = (state)=>{
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseDashboardPage);