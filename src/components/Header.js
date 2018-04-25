import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from './../actions/auth';

export const Header = ({startLogout}) => (
    <header>
        <h1>Expensify</h1>
        <ul>
            <NavLink to="/dashboard" activeClassName="is-active"><li>Home</li></NavLink>
            <NavLink to="/create" activeClassName="is-active"><li>Create New Expense</li></NavLink>
            <button id='logoutButton' onClick={startLogout}>logout</button>
        </ul>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: ()=>dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);