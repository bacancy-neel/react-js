import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import './App.css'
import Record from './Record';
import EditUser from './EditUser';
import Delete from './Delete';

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
            <Route exact path="/add-record" component={EditUser} />
            <Route exact path="/edit-user/:id" render={(props) => <EditUser {...props} edit="true" />} />
            <Route exact path="/delete-user" component={Delete} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
