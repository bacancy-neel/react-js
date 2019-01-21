import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Sidebar from './Sidebar'
import MyBlog from './MyBlog';
import FashionBlog from './FashionBlog';
import FoodBlog from './FoodBlog';
import ArtBlog from './ArtBlog';
import '../css/Blogs.css'


class Blogs extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="wrap">
                    <Sidebar />
                    <Switch>
                        <Route exact path="/blogs/" component={MyBlog} />
                        <Route exact path="/blogs/fashion-blog" component={FashionBlog} />
                        <Route exact path="/blogs/food-blog" component={FoodBlog} />
                        <Route exact path="/blogs/art-blog" component={ArtBlog} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default Blogs;