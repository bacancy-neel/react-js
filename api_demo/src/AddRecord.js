import React, { Component } from 'react';

import './AddRecord.css'


class AddRecord extends Component {

    render() {
        return (
            <form className="add-record">
                <b>Add User</b><br /><br /><br />
                <label>Name:</label><br />
                <input type="text" placeholder="Enter your name"></input><br />

                <label>Job:</label><br />
                <input type="text" placeholder="Enter your job"></input><br />

                <input type="submit" value="Submit"></input>
                <input type="reset" value="Cancel"></input>
            </form>
        );
    }
}

export default AddRecord;