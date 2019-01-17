import React, { Component } from 'react';
import { NavLink, } from 'react-router-dom';


class Header extends Component {

    render() {
        return (
            <header>

                <ul>
                    <li><NavLink activeClassName="active" exact to="/sign-up">Sign Up</NavLink></li>
                    <li><NavLink activeClassName="active" exact to="/">Log In</NavLink></li>
                </ul>

            </header>
        );
    }

}

export default Header;