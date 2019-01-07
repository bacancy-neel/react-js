import React, { Component } from "react";

class Child extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      isApiCall: false,
      isValidEmail: true
    };
    this.inputChange = this.inputChange.bind(this);
    this.addDetails = this.addDetails.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  inputChange(event) {
    console.log("Child Method: ", event.target.id, event.target.value);
    const key = event.target.id;
    const value = event.target.value;

    let obj = {};
    obj[key] = value;
    this.setState(obj);

    //this.props.setValue(key, value);
  }

  addDetails() {
    this.setState({ isApiCall: true });

    console.log("API CALL LOGIC");

    setTimeout(() => {
      this.setState({ isApiCall: false });
    }, 2000);
  }

  validateEmail(e) {
    const email = e.target.value;
    let isValid = false;

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    isValid = re.test(String(email).toLowerCase());

    this.setState({ isValidEmail: isValid });
  }

  render() {
    const { name, age, isApiCall, isValidEmail } = this.state;
    return (
      <div className="cntr">
        <p>Sign Up</p>
        <input
          className="form"
          type="text"
          placeholder="Enter name"
          id="name"
          onChange={this.inputChange}
        />
        <input
          className="form"
          type="text"
          placeholder="Enter age"
          id="age"
          onChange={this.inputChange}
        />
        <input
          className="form"
          style={{ borderColor: isValidEmail ? "lightgray" : "red" }}
          type="text"
          placeholder="Enter email"
          id="email"
          onBlur={this.validateEmail}
        />
        {isValidEmail ? null : (
          <div>
            <span style={{ color: "red" }}>Please enter valid email.</span>
            <br />
          </div>
        )}
        <button onClick={this.addDetails} disabled={isApiCall}>
          Submit
        </button>
        <br />
        <br />
        Name: {name}
        <br />
        Name: {age} <br />
        API Call: {isApiCall.toString()}
        <br />
        Is Email valid: {isValidEmail.toString()}
      </div>
    );
  }
}

export default Child;
