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
                    value={this.props.u_name.value}
                    onChange={(e) => this.props.inputChange(e, 6)}
                />
                <input
                    className="loginForm"
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={this.props.pass.value}
                    onChange={(e) => this.props.inputChange(e, 6)}
                />

                <input type="button" value="Submit" className="btn" onClick={() => this.props.onLogin()} />
            </div>
        );
    }
}

export default Login;