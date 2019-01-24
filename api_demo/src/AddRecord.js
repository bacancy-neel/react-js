import React, { Component } from 'react';
import axios from 'axios';
import './AddRecord.css'


class AddRecord extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            job: ""
        }
        this.addUser = this.addUser.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    addUser() {
        axios.post('https://reqres.in/api/users', {
            name: this.state.name,
            job: this.state.job
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        this.setState({ name: "", job: "" });
    }

    inputChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <form className="add-record">
                <b>Add User</b><br /><br /><br />
                <label>Name:</label><br />
                <input type="text" placeholder="Your name..." name="name" value={this.state.name} onChange={(e) => this.inputChange(e)}></input><br /><br />

                <label>Job:</label><br />
                <input type="text" placeholder="Your job..." name="job" value={this.state.job} onChange={(e) => this.inputChange(e)}></input><br /><br />

                <input type="button" value="Submit" onClick={this.addUser}></input>
                <input type="reset" value="Cancel"></input>
            </form>
        );
    }
}

export default AddRecord;