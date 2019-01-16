import React, { Component } from 'react';
import './SignUp.css';



class SignUp extends Component {

    componentWillMount() {
        console.log("SIGNUP WILL MOUNT");
    }

    componentDidMount() {
        console.log("SIGNUP DID MOUNT");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("SIGNUP SHOULD UPDATE", nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("SIGNUP WILL UPDATE", nextProps, nextState);
    }

    componentDidUpdate(nextProps, nextState) {
        console.log("SIGNUP DID UPDATE", nextProps, nextState);
    }

    componentWillReceiveProps(nextProps) {
        console.log("SIGNUP WILL RECEIVE PROPS", nextProps);
    }

    render() {
        console.log("SIGNUP RENDER");
        return (
            <form className="signup-form" >
                <p>Sign Up</p>
                <input
                    className="signUpForm"
                    type="text"
                    placeholder="Enter first name"
                    name="first_name"
                    value={this.props.signupform.first_name}
                    onChange={(e) => this.props.inputChange(e)}
                />
                <input
                    className="signUpForm"
                    type="text"
                    placeholder="Enter last name"
                    name="last_name"
                    value={this.props.signupform.last_name}
                    onChange={(e) => this.props.inputChange(e)}
                />
                <input
                    className="signUpForm"
                    type="text"
                    placeholder="Enter user name"
                    name="username"
                    value={this.props.signupform.username}
                    onChange={(e) => this.props.inputChange(e)}
                />
                <input
                    className="signUpForm"
                    type="text"
                    placeholder="Enter e-mail"
                    name="email"
                    value={this.props.signupform.email}
                    onChange={(e) => this.props.inputChange(e)}
                />
                <input
                    className="signUpForm"
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={this.props.signupform.password}
                    onChange={(e) => this.props.inputChange(e)}
                />
                Gender:<br />
                <input
                    className="signUpForm"
                    type="radio"
                    name="gender"
                    value="male"
                    checked={this.props.signupform.gender === "male"}
                    onChange={(e) => this.props.inputChange(e)}
                />Male
                <input
                    className="signUpForm"
                    type="radio"
                    name="gender"
                    value="female"
                    checked={this.props.signupform.gender === "female"}
                    onChange={(e) => this.props.inputChange(e)}
                />Female
                <input
                    className="signUpForm"
                    type="radio"
                    name="gender"
                    value="other"
                    checked={this.props.signupform.gender === "other"}
                    onChange={(e) => this.props.inputChange(e)}
                />Other<br />
                Degree:
                <select name="degree" className="signUpForm" onChange={(e) => this.props.inputChange(e)}>
                    <option value="BE" selected={this.props.signupform.degree === "BE"}>BE</option>
                    <option value="ME" selected={this.props.signupform.degree === "ME"}>ME</option>
                    <option value="BCA" selected={this.props.signupform.degree === "BCA"}>BCA</option>
                    <option value="MCA" selected={this.props.signupform.degree === "MCA"}>MCA</option>
                </select>

                <input type="button" formMethod="post" value="Submit" className="btn" onClick={() => this.props.onAddUser()} />
            </form>
        );
    }
}

export default SignUp;

