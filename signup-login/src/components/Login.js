import React, { Component } from 'react';
import './Login.css';


class Login extends Component {
    render() {

        return (
            <div className="login-form" >
                <p>Log In</p>
                <input
                    className="form"
                    type="text"
                    placeholder="Enter e-mail"
                    id="email"
                    value={this.props.email.value}
                    onChange={(e) => this.props.inputChange(e, 5)}
                />
                <input
                    className="form"
                    type="password"
                    placeholder="Enter password"
                    id="password"
                    value={this.props.pass.value}
                    onChange={(e) => this.props.inputChange(e, 6)}
                />

                <button >
                    Submit
            </button>
            </div>
        );
    }
}

export default Login;