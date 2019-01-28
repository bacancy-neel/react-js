import React, { Component } from "react";

class Delete extends Component {

  render() {
    window.confirm("Are you sure?") ? window.alert("User deleted") : window.alert("User not deleted");
    this.props.history.goBack();
    return (

      < React.Fragment ></React.Fragment >
    );
  }
}

export default Delete;