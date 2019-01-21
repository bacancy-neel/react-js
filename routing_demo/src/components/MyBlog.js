import React, { Component } from 'react';
import '../css/Blog.css'

class MyBlog extends Component {
    render() {
        return (
            <div className="MyBlog">
                <h2>My Blog</h2>
                <p>Welcome to the <i style={{ color: "blue" }}>personal</i> blog</p>
                <div className="w3-card-4 w3-margin w3-white">
                    <img src="https://www.w3schools.com/w3images/woods.jpg" alt="Nature" style={{ width: "100%" }} />
                    <div className="w3-container">
                        <h3><b>TITLE HEADING</b></h3>
                        <h5>Title description, <span className="w3-opacity">April 7, 2014</span></h5>
                    </div>

                    <div className="w3-container">
                        <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed
        tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                    </div>

                    <hr></hr>
                </div>



                <div className="w3-card-4 w3-margin w3-white">
                    <img src="https://www.w3schools.com/w3images/bridge.jpg" alt="Norway" style={{ width: "100%" }} />
                    <div className="w3-container">
                        <h3><b>BLOG ENTRY</b></h3>
                        <h5>Title description, <span className="w3-opacity">April 2, 2014</span></h5>
                    </div>

                    <div className="w3-container">
                        <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed
        tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                    </div>
                    <hr></hr>
                </div>
            </div>
        );
    };
}

export default MyBlog;