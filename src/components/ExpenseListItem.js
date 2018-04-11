import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = (props) => 
{
    return (
    <div style={{borderBottom:'thin solid black'}}>
    <p>Amount: {numeral(props.amount/100).format('$0,0.00')}<br />
    Date: {moment(props.createdAt).format('MMMM Do, YYYY')}<br />
    <Link to={`/edit/${props.id}`}>Desc: {props.description}</Link></p>
    
    
    </div>
)};

export default ExpenseListItem;