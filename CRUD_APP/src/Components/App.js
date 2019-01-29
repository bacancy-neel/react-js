import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../CSS/App.css'

import Header from './Header';
import Record from './Record';
import EditUser from './EditUser';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Record} />
            <Route exact path="/new" component={EditUser} />
            <Route exact path="/edit-user/:id" component={EditUser} />} />
            <Route exact path="/delete-user/:id" component={Record} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
