import React, { Component } from 'react';
import './Login.css';



class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            gender: "male"
        }
    }

    componentWillMount() {
        console.log("LOGIN WILL MOUNT");
    }

    componentDidMount() {
        console.log("LOGIN DID MOUNT");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("LOGIN SHOULD UPDATE", nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        nextState.username = nextProps.loginform.username;
        nextState.password = nextProps.loginform.password;
        nextState.gender = nextProps.loginform.gender;
        console.log("LOGIN WILL UPDATE", nextProps, nextState);
    }

    componentDidUpdate(nextProps, nextState) {
        console.log("LOGIN DID UPDATE", nextProps, nextState);
    }

    componentWillReceiveProps(nextProps) {
        console.log("LOGIN WILL RECEIVE PROPS", nextProps);
    }

    render() {
        console.log("LOGIN RENDER");
        return (
            <div className="login-form" >
                <p>Log In</p>
                <input
                    className="loginForm"
                    type="text"
                    placeholder="Enter user name"
                    name="username"
                    value={this.state.username}
                    onChange={(e) => this.props.inputChange(e)}
                />
                <input
                    className="loginForm"
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={this.state.password}
                    onChange={(e) => this.props.inputChange(e)}
                />
                <input
                    className="loginForm"
                    type="radio"
                    name="gender"
                    value="male"
                    checked={this.state.gender === "male"}
                    onChange={(e) => this.props.inputChange(e)}
                />Male
                <input
                    className="loginForm"
                    type="radio"
                    name="gender"
                    value="female"
                    checked={this.state.gender === "female"}
                    onChange={(e) => this.props.inputChange(e)}
                />Female
                <input
                    className="loginForm"
                    type="radio"
                    name="gender"
                    value="other"
                    checked={this.state.gender === "other"}
                    onChange={(e) => this.props.inputChange(e)}
                />Other
                <input type="button" value="Submit" className="btn" onClick={() => this.props.onLogin()} />
            </div>
        );
    }
}

export default Login;