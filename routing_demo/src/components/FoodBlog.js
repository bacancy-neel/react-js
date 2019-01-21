import React, { Component } from 'react';
import '../css/Blog.css'

class FoodBlog extends Component {
    render() {
        return (
            <div className="FoodBlog">
                <h2>My Blog</h2>
                <p>Welcome to the <i style={{ color: "blue" }}>food</i> blog</p>
            </div>
        );
    };
}

export default FoodBlog;