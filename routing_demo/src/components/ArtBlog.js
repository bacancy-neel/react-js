import React, { Component } from 'react';
import '../css/Blog.css'

class ArtBlog extends Component {
    render() {
        return (
            <div className="ArtBlog">
                <h2>My Blog</h2>
                <p>Welcome to the <i style={{ color: "blue" }}>art</i> blog</p>
            </div>
        );
    };
}

export default ArtBlog;