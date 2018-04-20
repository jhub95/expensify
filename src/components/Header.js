import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from './../actions/auth';

export const Header = ({startLogout}) => (
    <header>
        <h1>Expensify</h1>
        <ul>
            <NavLink to="/" activeClassName="is-active" exact={true}><li>Home</li></NavLink>
            <NavLink to="/create" activeClassName="is-active"><li>Create New Expense</li></NavLink>
            <NavLink to="/help" activeClassName="is-active"><li>Help Page</li></NavLink>
            <button id='logoutButton' onClick={startLogout}>logout</button>
        </ul>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: ()=>dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);