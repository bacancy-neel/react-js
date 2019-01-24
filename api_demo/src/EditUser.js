import React, { Component } from 'react';

import './AddRecord.css'


class EditUsre extends Component {

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