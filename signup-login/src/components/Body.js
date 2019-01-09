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

            }
        };
        this.inputChange = this.inputChange.bind(this);
    }

    inputChange = (e) => {
        console.log("Function called!");

        if (e.target.className === "signUpForm") {
            const signUpForm = { ...this.state.signUpForm, [e.target.name]: e.target.value };
            this.setState({ signUpForm }, () => {
                console.log(this.state);
            })
        }

        else {
            const loginForm = { ...this.state.loginForm, [e.target.name]: e.target.value };
            this.setState({ loginForm }, () => {
                console.log(this.state);
            })
        }
    }


    onAddUser = () => {
        // not allowed AND not working

        const { signUpForm, users } = this.state;

        if (signUpForm.first_name === "" || signUpForm.last_name === "" || signUpForm.username === "" || signUpForm.email === "" || signUpForm.password === "") {
            alert("Fill all details");
            return;
        }

        let check = users.filter((user) => {
            return user.username === signUpForm.username;
        });

        if (check.length !== 0) {
            alert("User already exist");
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
            alert("Logged in succesfully");
            return;
        }
        else {
            alert("User does not exist!");
            return;
        }
    }


    render() {



        return (
            <React.Fragment>
                <SignUp inputChange={this.inputChange} onAddUser={this.onAddUser} f_name={this.state.signUpForm.first_name} l_name={this.state.signUpForm.last_name} u_name={this.state.signUpForm.username} email={this.state.signUpForm.email} pass={this.state.signUpForm.password} />
                <Login inputChange={this.inputChange} onLogin={this.onLogin} u_name={this.state.loginForm.username} pass={this.state.loginForm.password} />
            </React.Fragment>
        );
    }
}

export default Body;