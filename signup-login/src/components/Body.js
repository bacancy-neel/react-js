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

    inputChange(e, id) {
        let s_obj = { ...this.state.signUpForm }
        let l_obj = { ...this.state.loginForm }
        switch (id) {
            case 1:
                s_obj.first_name = e.target.value;
                this.setState({ s_obj })

                break;

            case 2:
                s_obj.last_name = e.target.value;
                this.setState({ s_obj })

                break;

            case 3:
                s_obj.email = e.target.value;
                this.setState({ s_obj })

                break;

            case 4:
                s_obj.password = e.target.value;
                this.setState({ s_obj })

                break;

            case 5:
                l_obj.email = e.target.value;
                this.setState({ l_obj })
                break;

            case 6:
                l_obj.password = e.target.value;
                this.setState({ l_obj })
                break;

            default: break;
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