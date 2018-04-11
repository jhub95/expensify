import React from 'react';
import {Link,NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <ul>
            <NavLink to="/" activeClassName="is-active" exact={true}><li>Home</li></NavLink>
            <NavLink to="/create" activeClassName="is-active"><li>Create New Expense</li></NavLink>
            <NavLink to="/help" activeClassName="is-active"><li>Help Page</li></NavLink>
        </ul>
    </header>
);

export default Header;