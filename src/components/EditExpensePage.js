import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense, startRemoveExpense} from './../actions/expenses';

export class EditExpensePage extends React.Component{
    startEditExpense = (expense) => {
        console.log("expenseEditPage: expenses-",expense)
        this.props.startEditExpense(this.props.expense.id,expense);
        this.props.history.push('/');
    };
    removeExpense = (e) => {
        this.props.startRemoveExpense(this.props.expense.id);
        this.props.history.push('/');
    };
    render(){
        return (
        <div>
        <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.startEditExpense}
        />
        <button onClick={this.removeExpense}
        >remove</button>
        </div>
        )
    };
};

const mapStateToProps = (state,props) => ({
    expense:state.expenses.find((expense)=> expense.id === props.match.params.id) 
});

const mapDispatchToProps = (dispatch,props)=>({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);