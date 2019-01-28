import React, { Component } from 'react';
import axios from 'axios';

import './AddRecord.css'



class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      job: "",
      avatar: "",
      edit: this.props.edit || false
    }
    this.handleClick = this.handleClick.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  componentDidMount() {
    if (this.state.edit) {
      axios.get(`https://reqres.in/api/users/${this.props.match.params.id}`)
        .then(rs => {
          console.log("res...", rs);
          return rs.data;
        })
        .then(data => this.setState({ name: data.data.first_name, job: data.data.last_name, avatar: data.data.avatar }))
        .catch(err => {
          console.log(err);
        })
    }

  }

  handleClick() {
    if (this.state.edit) {
      axios.put(`https://reqres.in/api/users/${this.props.match.params.id}`, {
        name: this.state.name,
        job: this.state.job
      })
        .then(rs => {
          console.log("res...", rs);
        })
        .catch(err => {
          console.log(err);
        })
    }
    else {
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
  }

  inputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    console.log("EDIT USER", this.state);
    return (
      <form className="table-form edit-record">
        <b>{(this.state.edit) ? "Edit" : "Add"} User</b><br />
        <div className="row-form">
          <label>Name:</label><br />
          <input type="text" placeholder="Your name..." name="name" value={this.state.name} onChange={(e) => this.inputChange(e)}></input>
        </div>
        <div className="row-form">
          <label>Job:</label><br />
          <input type="text" placeholder="Your job..." name="job" value={this.state.job} onChange={(e) => this.inputChange(e)}></input>
        </div>
        {(this.state.edit) ? <div className="row-form">
          <label>Avatar:</label><br />
          <img src={this.state.avatar} alt="img" />
        </div> : <div></div>}

        <input type="button" value="Submit" onClick={this.handleClick}></input>
        <input type="reset" value="Cancel"></input>
      </form>
    );
  }
}

export default EditUser;