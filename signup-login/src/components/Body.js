import React, { Component } from 'react';
import SignUp from './SignUp';
import Login from './Login';


class Body extends Component {
    constructor() {
        super();
        this.state = {
            signUpForm: {
                first_name: "",
                last_name: "",
                username: "",
                email: "",
                password: ""
            },
            users: [],
            loginForm: {
                username: "",
                password: ""
            },
            text: ""
        };
        this.inputChange = this.inputChange.bind(this);
        this.onAddUser = this.onAddUser.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.validate = this.validate.bind(this);
    }

    validate = (e) => {
        console.log("VALIDATING");
        let re, txt;
        switch (e.target.name) {
            case "first_name":
            case "last_name":
                re = /^[a-zA-Z ]{3,30}$/;
                (!re.test(e.target.value)) ? txt = "You must enter valid name" : txt = "";
                break;
            case "email":
                re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                (!re.test(e.target.value)) ? txt = "You must enter valid email" : txt = "";
                break;
            case "username":
                console.log("USERNAME");
                re = /^[A-Za-z0-9_]{3,20}$/;
                (!re.test(e.target.value)) ? txt = "You must enter valid username" : txt = "";
                console.log(txt);
                break;
            case "password":
                re = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
                (!re.test(e.target.value)) ? txt = "You must enter valid password" : txt = "";
                break;
            default:
                break;
        }

        return txt;
    }

    inputChange = (e) => {
        console.log("Function called!");
        let text;
        if (e.target.className === "signUpForm") {
            text = this.validate(e);
            const signUpForm = { ...this.state.signUpForm, [e.target.name]: e.target.value };
            this.setState({ signUpForm, text }, () => {
                console.log(this.state);
            })
        }
        else {
            text = this.validate(e);
            const loginForm = { ...this.state.loginForm, [e.target.name]: e.target.value };
            this.setState({ loginForm, text }, () => {
                console.log(this.state);
            })
        }
    }
    s

    onAddUser = () => {
        const { signUpForm, users } = this.state;

        if (signUpForm.first_name === "" || signUpForm.last_name === "" || signUpForm.username === "" || signUpForm.email === "" || signUpForm.password === "") {
            alert("Fill all details");
            return;
        }
        if (this.state.text !== "") {
            alert("Data invalid");
            return;
        }

        let check = users.filter((user) => {
            return user.username === signUpForm.username;
        });

        if (check.length !== 0) {
            alert("Username already exist");
            return;
        }


        this.state.users.push({
            "first_name": signUpForm.first_name,
            "last_name": signUpForm.last_name,
            "username": signUpForm.username,
            "email": signUpForm.email,
            "password": signUpForm.password

        });

        this.setState({
            users,
            signUpForm: {
                first_name: "",
                last_name: "",
                username: "",
                email: "",
                password: ""

            }
        }, () => {
            alert("Submitted succesfully!");
            console.log(this.state);
        });

    }

    onLogin = () => {
        const { loginForm, users } = this.state;

        if (loginForm.username === "" || loginForm.password === "") {
            alert("Fill all details");
            return;
        }

        let check = users.filter((user) => {
            return (user.username === loginForm.username) && (user.password === loginForm.password);
        });

        if (check.length !== 0) {
            this.setState({
                loginForm: {
                    username: "",
                    password: ""
                }
            });
            alert("Logged in succesfully");
            return;
        }
        else {
            alert("Username does not exist!");
            return;
        }
    }


    render() {
        return (
            <React.Fragment>
                <SignUp
                    inputChange={this.inputChange}
                    onAddUser={this.onAddUser}
                    f_name={this.state.signUpForm.first_name}
                    l_name={this.state.signUpForm.last_name}
                    u_name={this.state.signUpForm.username}
                    email={this.state.signUpForm.email}
                    pass={this.state.signUpForm.password}
                />
                <Login
                    inputChange={this.inputChange}
                    onLogin={this.onLogin}
                    u_name={this.state.loginForm.username}
                    pass={this.state.loginForm.password}
                />
                <p className="error">{this.state.text}</p>
            </React.Fragment>
        );
    }
}

export default Body;