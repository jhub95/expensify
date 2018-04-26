import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = (props) => 
{
    return (
    <Link to={`/edit/${props.id}`} className="list-item">
        <div>
            <h4 className="list-item__title">{props.description}</h4>
            <span className="list-item__subtitle">{moment(props.createdAt).format('MMMM Do, YYYY')}</span>
        </div>
       <h4 className="list-item__data">{numeral(props.amount/100).format('$0,0.00')}</h4>
        
    
    </Link>
    
    
    
)};

export default ExpenseListItem;