import React from 'react';
import {Link} from 'react-router-dom';

export const ExpenseListItem = (props) => 
{
    return (
    <div style={{borderBottom:'thin solid black'}}>
    <p>Amount: {props.amount}<br />
    Date: {props.createdAt}<br />
    <Link to={`/edit/${props.id}`}>Desc: {props.description}</Link></p>
    
    
    </div>
)};

export default ExpenseListItem;