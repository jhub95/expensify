import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

import selectExpenses from './../selectors/expenses';
import getExpensesTotal from './../selectors/expenses-total';


export const ExpenseSummary = ({expenses})=>{
    const length = expenses.length;
    const total = getExpensesTotal(expenses);
    return (
    <div className="page-header">
        
        {length > 0 ? <div className="content-container">
            <div className="page-header__title">Viewing <span>{length}</span> {length > 1 || length === 0 ? 'expenses' : 'expense'} totalling <span>{numeral(total/100).format('$0,0.00')}</span></div>
        </div> : ''}
        <div className="content-container">
            <Link to="/create"><button className="button">New Expense</button></Link>
        </div>
    </div>
    )
};

const mapStateToProps = (state)=>{
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);