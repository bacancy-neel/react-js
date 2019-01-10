import React, { Component } from 'react';
import './SignUp.css';



class SignUp extends Component {
    render() {

        return (
            <form className="signup-form" >
                <p>Sign Up</p>
                <input
                    className="signUpForm"
                    type="text"
                    placeholder="Enter first name"
                    name="first_name"
                    value={this.props.f_name.value}
                    onChange={(e) => this.props.inputChange(e)}
                />
                <input
                    className="signUpForm"
                    type="text"
                    placeholder="Enter last name"
                    name="last_name"
                    value={this.props.l_name.value}
                    onChange={(e) => this.props.inputChange(e)}
                />
                <input
                    className="signUpForm"
                    type="text"
                    placeholder="Enter user name"
                    name="username"
                    value={this.props.u_name.value}
                    onChange={(e) => this.props.inputChange(e)}
                />
                <input
                    className="signUpForm"
                    type="text"
                    placeholder="Enter e-mail"
                    name="email"
                    value={this.props.email.value}
                    onChange={(e) => this.props.inputChange(e)}
                />
                <input
                    className="signUpForm"
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={this.props.pass.value}
                    onChange={(e) => this.props.inputChange(e)}
                />

                <input type="reset" value="Submit" className="btn" onClick={() => this.props.onAddUser()} />

                <p className="error">{this.props.text}</p>

            </form>
        );
    }
}

export default SignUp;

