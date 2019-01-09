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
                email: "",
                password: ""

            },
            loginForm: {
                email: "",
                password: ""

            }
        };
        this.inputChange = this.inputChange.bind(this);
    }

    inputChange(e) {
        console.log("Function called!");

        if (e.target.className === "signUpForm") {
            const signUpForm = { ...this.state.signUpForm, [e.target.id]: e.target.value };
            this.setState({ signUpForm }, () => {
                console.log(this.state);
            })
        }

        else {
            const loginForm = { ...this.state.loginForm, [e.target.id]: e.target.value };
            this.setState({ loginForm }, () => {
                console.log(this.state);
            })
        }
    }




    render() {


        return (
            <React.Fragment>
                <SignUp inputChange={this.inputChange} f_name={this.state.signUpForm.first_name} l_name={this.state.signUpForm.last_name} email={this.state.signUpForm.email} pass={this.state.signUpForm.password} />
                <Login inputChange={this.inputChange} email={this.state.loginForm.email} pass={this.state.loginForm.password} />
            </React.Fragment>
        );
    }
}

export default Body;