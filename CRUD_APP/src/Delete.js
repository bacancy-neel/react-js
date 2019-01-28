import React, { Component } from "react";

class Delete extends Component {

  render() {
    window.confirm("Are you sure?") ? this.props.history.goBack() : window.alert("Not deleted");
    return (

      < React.Fragment ></React.Fragment >
    );
  }
}

export default Delete;