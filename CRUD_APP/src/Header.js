import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>User CRUD Application</h1>
                <div className="li">
                    <ul>
                        <li><NavLink activeClassName="active" exact to="/">Record List</NavLink></li>
                        <li> | </li>
                        <li><NavLink activeClassName="active" exact to="/add-record">Add Record</NavLink></li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;