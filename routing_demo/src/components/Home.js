import React, { Component } from 'react';

import '../css/Home.css';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <h1 >Welcome</h1>
                <hr style={{ margin: 'auto', width: '10%' }} />
                <p>happy browsing</p>
            </div>
        );
    }
}

export default Home;