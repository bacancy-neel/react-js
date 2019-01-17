import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';



class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            gender: "male",
            degree: "BE"
        }
    }

    componentWillMount() {
        this.setState({
            username: this.props.loginform.username,
            password: this.props.loginform.password,
            gender: this.props.loginform.gender,
            degree: this.props.loginform.degree
        });
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
        nextState.degree = nextProps.loginform.degree;
        console.log("LOGIN WILL UPDATE", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("LOGIN DID UPDATE", prevProps, prevState);
    }

    componentWillReceiveProps(nextProps) {
        console.log("LOGIN WILL RECEIVE PROPS", nextProps);
    }

    render() {
        console.log("LOGIN RENDER");
        return (
            <React.Fragment>
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
                    Gender:<br />
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
                    />Other<br />
                    Degree:
                <select name="degree" className="loginForm" onChange={(e) => this.props.inputChange(e)}>
                        <option value="BE" selected={this.state.degree === "BE"}>BE</option>
                        <option value="ME" selected={this.state.degree === "ME"}>ME</option>
                        <option value="BCA" selected={this.state.degree === "BCA"}>BCA</option>
                        <option value="MCA" selected={this.state.degree === "MCA"}>MCA</option>
                    </select>
                    <input type="button" value="Submit" className="btn" onClick={() => this.props.onLogin()} />
                </div>
                <br /><br />
                <p>Don't have an account?<br />Sign Up here...<br /><NavLink to="/sign-up">Sign Up</NavLink></p>
            </React.Fragment>
        );
    }
}

export default Login;