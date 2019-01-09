import React, { Component } from 'react';
import './SignUp.css';


class SignUp extends Component {
    render() {

        return (
            <div className="signup-form" >
                <p>Sign Up</p>
                <input
                    className="form"
                    type="text"
                    placeholder="Enter first name"
                    id="f_name"
                    value={this.props.f_name.value}
                    onChange={(e) => this.props.inputChange(e, 1)}
                />
                <input
                    className="form"
                    type="text"
                    placeholder="Enter last name"
                    id="l_name"
                    value={this.props.l_name.value}
                    onChange={(e) => this.props.inputChange(e, 2)}
                />
                <input
                    className="form"
                    type="text"
                    placeholder="Enter email"
                    id="email"
                    value={this.props.email.value}
                    onChange={(e) => this.props.inputChange(e, 3)}
                />
                <input
                    className="form"
                    type="password"
                    placeholder="Enter password"
                    id="password"
                    value={this.props.pass.value}
                    onChange={(e) => this.props.inputChange(e, 4)}
                />

                <button >
                    Submit
            </button>
            </div>
        );
    }
}

export default SignUp;