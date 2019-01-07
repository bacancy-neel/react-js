import React, { Component } from "react";
import Child from "./Child";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      address: "",
      email: ""
    };
    this.getInputValues = this.getInputValues.bind(this);
  }

  getInputValues(key, value) {
    console.log("Parent Method: ", key, value);

    let obj = {};
    obj[key] = value;

    this.setState(obj, () => {
      console.log("State name: ", new Date());
    });

    console.log("this.state.name: ", new Date());
  }

  render() {
    return (
      <div>
        <Child setValue={this.getInputValues} />
        <hr />
        Name: {this.state.name} <br />
        Age: {this.state.age}
      </div>
    );
  }
}

export default App;
