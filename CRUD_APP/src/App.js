import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css'

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
            <Route exact path="/add-record" render={(props) => <EditUser {...props} edit={false} key="add-user" />} />
            <Route exact path="/edit-user/:id" render={(props) => <EditUser {...props} edit={true} />} />
            <Route exact path="/delete-user/:id" component={Record} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
