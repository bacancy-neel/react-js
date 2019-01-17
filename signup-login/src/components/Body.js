import React, { Component } from 'react';
/*import { NavLink, BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';*/
import Routing from './Routing';


class Body extends Component {
    constructor() {
        super();
        this.state = {
            signUpForm: {
                first_name: "",
                last_name: "",
                username: "",
                email: "",
                password: "",
                gender: "male",
                degree: "BE"
            },
            users: [],
            loginForm: {
                username: "",
                password: "",
                gender: "male",
                degree: "BE"
            },
            text: ""
        };
        this.inputChange = this.inputChange.bind(this);
        this.onAddUser = this.onAddUser.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.validate = this.validate.bind(this);
    }


    componentWillMount() {
        console.log("BODY WILL MOUNT");
    }

    componentDidMount() {
        console.log("BODY DID MOUNT");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("BODY SHOULD UPDATE", nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("BODY WILL UPDATE", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("BODY DID UPDATE", prevProps, prevState);
    }

    componentWillReceiveProps(nextProps) {
        console.log("BODY WILL RECEIVE PROPS", nextProps);
    }

    validate = (e) => {
        //console.log("VALIDATING");
        let re, txt;
        switch (e.target.name) {
            case "first_name":
            case "last_name":
                re = /^[a-zA-Z ]{3,30}$/;
                (!re.test(e.target.value)) ? txt = "You must enter valid name" : txt = "";
                break;
            case "email":
                re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                (!re.test(e.target.value)) ? txt = "You must enter valid email" : txt = "";
                break;
            case "username":
                re = /^[A-Za-z0-9_]{3,20}$/;
                (!re.test(e.target.value)) ? txt = "You must enter valid username" : txt = "";
                break;
            case "password":
                re = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
                (!re.test(e.target.value)) ? txt = "You must enter valid password" : txt = "";
                break;
            default:
                txt = "";
                break;
        }
        if (txt !== "") e.target.style.borderColor = "red";
        else e.target.style.borderColor = "lightgray";
        return txt;
    }

    inputChange = (e) => {
        //console.log("Function called!");
        let text;
        text = this.validate(e);
        let obj = { ...this.state[e.target.className], [e.target.name]: e.target.value };
        this.setState({ [e.target.className]: obj, text }, () => {
            // console.log(this.state);
        })
    }


    onAddUser = () => {
        let { signUpForm, users } = this.state;

        if (signUpForm.first_name === "" || signUpForm.last_name === "" || signUpForm.username === "" || signUpForm.email === "" || signUpForm.password === "") {
            alert("Fill all details");
            return;
        }
        if (this.state.text !== "") {
            alert("Data invalid");
            return;
        }

        let check = users.filter((user) => {
            return (user.username === signUpForm.username);
        });

        if (check.length !== 0) {
            alert("Username already exist");
            return;
        }

        const obj = {
            "first_name": signUpForm.first_name,
            "last_name": signUpForm.last_name,
            "username": signUpForm.username,
            "email": signUpForm.email,
            "password": signUpForm.password,
            "gender": signUpForm.gender,
            "degree": signUpForm.degree
        }
        users = this.state.users.concat(obj);

        this.setState({
            users,
            loginForm: {
                username: obj.first_name,
                password: obj.password,
                gender: obj.gender,
                degree: obj.degree
            },
            signUpForm: {
                first_name: "",
                last_name: "",
                username: "",
                email: "",
                password: "",
                gender: "male",
                degree: "BE"
            }
        }, () => {
            alert("Submitted succesfully!");
            //console.log(this.state);
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
                    password: "",
                    gender: "male",
                    degree: "BE"
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
        console.log("BODY RENDER");
        return (
            <Routing
                inputChange={this.inputChange}
                onAddUser={this.onAddUser}
                signupform={this.state.signUpForm}
                onLogin={this.onLogin}
                loginform={this.state.loginForm}
                text={this.state.text}
            />
            /*<SignUp
                inputChange={this.inputChange}
                onAddUser={this.onAddUser}
                signupform={this.state.signUpForm}
            />
            <Login
                inputChange={this.inputChange}
                onLogin={this.onLogin}
                loginform={this.state.loginForm}
            />*/


        );
    }
}

export default Body;