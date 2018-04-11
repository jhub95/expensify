import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from './../actions/expenses';

// three tests 1. render page with snapshot
// 2. should handle editExpense with spy
// 3. should handle removeExpense with spy

export class EditExpensePage extends React.Component{
    editExpense = (expense) => {
        this.props.editExpense(expense);
        this.props.history.push('/');
    };
    removeExpense = (e) => {
        this.props.removeExpense(this.props.expense.id);
        this.props.history.push('/');
    };
    render(){
        return (
        <div>
        <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.editExpense}
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
    editExpense: (expense) => dispatch(editExpense(expense.id, expense)),
    removeExpense: (id) => dispatch(removeExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);