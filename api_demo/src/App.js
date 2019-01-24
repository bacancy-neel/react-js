import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import './App.css'
import Record from './Record';
import AddRecord from './AddRecord';
import EditUser from './EditUser';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <h1>User CRUD Application</h1>
          <div className="li">
            <ul>
              <li><NavLink activeClassName="active" exact to="/">Record List</NavLink></li>
              <li> | </li>
              <li><NavLink activeClassName="active" exact to="/add-record">Add Record</NavLink></li>
            </ul>
          </div>
          <Switch>
            <Route exact path="/" component={Record} />
            <Route exact path="/add-record" component={AddRecord} />
            <Route exact path="/edit-user" component={EditUser} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
