import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Header from './Header';
import SignUp from './SignUp';
import Login from './Login';

class Routing extends Component {


    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Header />
                    <div className="error">{this.props.text}</div>
                    <Switch>
                        <Route
                            exact path='/sign-up'
                            render={(props) => <SignUp {...props} inputChange={this.props.inputChange}
                                onAddUser={this.props.onAddUser}
                                signupform={this.props.signupform} />}
                        />
                        <Route
                            exact path='/'
                            render={(props) => <Login {...props} inputChange={this.props.inputChange}
                                onLogin={this.props.onLogin}
                                loginform={this.props.loginform} />}
                        />
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default Routing;