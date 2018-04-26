import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';



export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount/100).toString() : '',
            errorMessage: '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false
        };
    };
    
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(()=>({description}));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(()=>({note}));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match( /^\d{1,}(\.\d{0,2})?$/) ){
            this.setState(()=>({amount}));
        }
    };
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(()=>({createdAt}));
        }
        
    };
    onFocusChange = ({focused}) => {
        this.setState(()=>({calendarFocused:focused}));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(()=>({errorMessage:'please provide description and amount'}));
        } else {
            this.setState(()=>({errorMessage:''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount,10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };
    render() {
        return (
            <form onSubmit={this.onSubmit} className="form">
                {this.state.errorMessage && <p className="form__error">{this.state.errorMessage}</p>}
                <input 
                    name="description"
                    id='description'
                    type="text" 
                    className="text-input"
                    placeholder="Description" 
                    value={this.state.description}
                    autoFocus
                    onChange={this.onDescriptionChange}
                />
                <input 
                    name="amount" 
                    id='amount'
                    type="text" 
                    placeholder="Amount"
                    className="text-input"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=> false }
                />
                <textarea 
                    name="note"  
                    id='note'
                    placeholder="note"
                    className="textarea"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                ></textarea>
                <div>
                    <button type="submit" className="button">submit</button>
                </div>
            </form>
        )
    }
}