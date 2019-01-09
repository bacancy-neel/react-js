import React, { Component } from 'react';
import './SignUp.css';



class SignUp extends Component {
    render() {

        return (
            <div className="signup-form" >
                <p>Sign Up</p>
                <input
                    className="signUpForm"
                    type="text"
                    placeholder="Enter first name"
                    id="first_name"
                    value={this.props.f_name.value}
                    onChange={(e) => this.props.inputChange(e)}
                />
                <input
                    className="signUpForm"
                    type="text"
                    placeholder="Enter last name"
                    id="last_name"
                    value={this.props.l_name.value}
                    onChange={(e) => this.props.inputChange(e)}
                />
                <input
                    className="signUpForm"
                    type="text"
                    placeholder="Enter e-mail"
                    id="email"
                    value={this.props.email.value}
                    onChange={(e) => this.props.inputChange(e)}
                />
                <input
                    className="signUpForm"
                    type="password"
                    placeholder="Enter password"
                    id="password"
                    value={this.props.pass.value}
                    onChange={(e) => this.props.inputChange(e)}
                />

                <input type="button" value="Submit" className="btn" />
            </div>
        );
    }
}

export default SignUp;