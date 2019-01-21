import React, { Component } from 'react';
import '../css/Blog.css'

class FashionBlog extends Component {
    render() {
        return (
            <div className="FashionBlog">
                <h2>My Blog</h2>
                <p>Welcome to the <i style={{ color: "blue" }}>fashion</i> blog</p>
            </div>
        );
    };
}

export default FashionBlog;