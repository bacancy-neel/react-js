import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import './App.css'
import Record from './Record';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <h1>User CRUD Application</h1>
          <ul>
            <li><NavLink activeClassName="active" to="1">Record List</NavLink></li>
            <li> | </li>
            <li><NavLink activeClassName="active" exact to="/add-record">Add Record</NavLink></li>
          </ul>
          <Switch>
            <Route exact path="/:id" component={Record} />
            <Route exact path="/add-record" component={Record} />

          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
