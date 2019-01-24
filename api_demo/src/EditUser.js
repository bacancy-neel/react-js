import React, { Component } from 'react';
import axios from 'axios';

import './AddRecord.css'



class EditUsre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            job: ""
        }
    }
    componentDidMount() {
        axios.get(`https://reqres.in/api/users/${this.props.match.params.id}`)
            .then(rs => {
                console.log("res...", rs);
                return rs.data;
            })
            .then(data => this.setState({ name: data.name, job: data.job }))
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        return (
            <form className="edit-record">
                <b>Edit User</b><br /><br /><br />
                <label>Name:</label><br />
                <input type="text" placeholder="Your name..."></input><br /><br />

                <label>Job:</label><br />
                <input type="text" placeholder="Your job..."></input><br /><br />

                <label>Avatar:</label><br />
                <br />

                <input type="submit" value="Submit"></input>
                <input type="reset" value="Cancel"></input>
            </form>
        );
    }
}

export default EditUsre;