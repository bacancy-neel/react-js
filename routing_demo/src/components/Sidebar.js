import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import '../css/Sidebar.css';

class Sidebar extends Component {
    render = () => {
        return (
            <div className="sidebar">
                <NavLink activeClassName="active" exact to="/blogs/">My Blog</NavLink>
                <NavLink activeClassName="active" exact to="/blogs/fashion-blog">Fashion</NavLink>
                <NavLink activeClassName="active" exact to="/blogs/food-blog">Food</NavLink>
                <NavLink activeClassName="active" exact to="/blogs/art-blog">Art</NavLink>
            </div>
        );
    }
}

export default Sidebar;