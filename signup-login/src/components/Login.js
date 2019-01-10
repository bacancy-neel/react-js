import React, { Component } from 'react';
import './Login.css';



class Login extends Component {
    render() {

        return (
            <div className="login-form" >
                <p>Log In</p>
                <input
                    className="loginForm"
                    type="text"
                    placeholder="Enter user name"
                    name="username"
                    value={this.props.u_name}
                    onChange={(e) => this.props.inputChange(e)}
                />
                <input
                    className="loginForm"
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={this.props.pass}
                    onChange={(e) => this.props.inputChange(e)}
                />
                <input type="button" value="Submit" className="btn" onClick={() => this.props.onLogin()} />
            </div>
        );
    }
}

export default Login;