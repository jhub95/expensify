import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from './../selectors/expenses';
import getExpensesTotal from './../selectors/expenses-total';
import numeral from 'numeral';

export const ExpenseSummary = ({expenses})=>{
    const length = expenses.length;
    const total = getExpensesTotal(expenses);
    if (length > 0){
        return (
        <p>Viewing {length} {length > 1 || length === 0 ? 'expenses' : 'expense'} totalling {numeral(total/100).format('$0,0.00')}</p>   
        )
    } else {
        return null;
    }
};

const mapStateToProps = (state)=>{
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);