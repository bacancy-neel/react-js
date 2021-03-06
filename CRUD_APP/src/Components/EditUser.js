import React, { Component } from 'react';
//import API from './API';
import { addUser, editUser, getUserData } from '../ApiCalls/apiCalls'

import '../CSS/AddRecord.css'



class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      job: "",
      avatar: "",
      loading: false,
      edit: (this.props.match.params.id) ? true : false
    }
    this.handleClick = this.handleClick.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.inputValidate = this.inputValidate.bind(this);
  }

  componentDidUpdate(preProps) {
    if (preProps !== this.props) {
      this.setState({
        name: "",
        job: "",
        avatar: "",
        edit: false
      });
    }
  }

  componentDidMount() {
    if (this.state.edit) {
      this.setState({ loading: true });
      getUserData(this.props.match.params.id)
        .then(data => this.setState({
          name: data.data.first_name,
          job: data.data.last_name,
          avatar: data.data.avatar,
          loading: false
        }))
        .catch(err => {
          console.log(err);
        })
      // API.get(`users/${this.props.match.params.id}`)
      //   .then(rs => {
      //     console.log("res...", rs);
      //     return rs.data;
      //   })
      //   .then(data => this.setState({ name: data.data.first_name, job: data.data.last_name, avatar: data.data.avatar, loading: false }))
      //   .catch(err => {
      //     console.log(err);
      //   })
    }
    else return;
  }

  inputValidate() {
    let regex = /^[a-zA-Z ]{2,30}$/;
    let f_name = this.state.name;
    let l_name = this.state.job;

    if (f_name === "" && l_name === "") {
      alert("You must enter both the fields...");
      return false;
    }
    if (f_name === "") {
      alert("You must enter name...");
      return false;
    }
    if (l_name === "") {
      alert("You must enter job...");
      return false;
    }

    if (!regex.test(f_name)) {
      alert("You must enter valid name...");
      return false;
    }
    if (!regex.test(l_name)) {
      alert("You must enter valid job...");
      return false;
    }
    return true;
  }

  handleClick() {
    if (this.inputValidate()) {
      this.setState({ loading: true });
      if (this.state.edit) {
        editUser(this.props.match.params.id, {
          name: this.state.name,
          job: this.state.job
        })
          // API.put(`users/${this.props.match.params.id}`, {
          //   name: this.state.name,
          //   job: this.state.job
          // })
          //   .then(rs => {
          //     console.log("res...", rs);
          //     return rs.data;
          //   })
          .then(() => this.setState({ loading: false }))
          .catch(err => {
            console.log(err);
          });
      }
      else {
        addUser({
          name: this.state.name,
          job: this.state.job
        })
          // API.post('users', {
          //   name: this.state.name,
          //   job: this.state.job
          // })
          //   .then(function (response) {
          //     console.log(response);
          //   })
          .then(() => this.setState({ loading: false }))
          .catch(function (error) {
            console.log(error);
          });
      }
      this.setState({ name: "", job: "" });
    }
  }

  handleReset() {
    this.props.history.push('/');
  }

  inputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { edit, avatar, name, job, loading } = this.state;

    return (
      <form className="table-form edit-record">
        <b>{(edit) ? "Edit" : "Add"} User</b><br />
        <div className="row-form">
          <label>Name:</label><br />
          <input type="text"
            placeholder="Your name..."
            name="name" value={name}
            onChange={(e) => this.inputChange(e)}></input>
        </div>

        <div className="row-form">
          <label>Job:</label><br />
          <input type="text"
            placeholder="Your job..."
            name="job" value={job}
            onChange={(e) => this.inputChange(e)}></input>
        </div>

        {(edit && avatar) ? <div className="row-form">
          <label>Avatar:</label><br />
          <img src={avatar} alt="img" />
        </div> : <div></div>}

        <input type="button" value={(loading) ? "Please wait..." : "Submit"} onClick={this.handleClick}></input>
        <input type="reset" value="Cancel" onClick={this.handleReset}></input>
      </form>
    );
  }
}


export default EditUser;