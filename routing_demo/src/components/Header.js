import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../css/Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <ul>
                    <li><NavLink activeClassName="active" exact to="/about">About</NavLink></li>
                    <li><NavLink activeClassName="active" exact to="/blogs">Blogs</NavLink></li>
                    <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Header;