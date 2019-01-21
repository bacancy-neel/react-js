import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import Blogs from './Blogs';
import Header from './Header';
import Home from './Home';

class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Header />
                    <div className="bodywrap">
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/blogs' component={Blogs} />
                            <Route exact path='/about' component={About} />
                        </Switch></div>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default Routing;