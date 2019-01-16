import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';

class App extends Component {

  componentWillMount() {
    console.log("APP WILL MOUNT");
  }

  componentDidMount() {
    console.log("APP DID MOUNT");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("APP SHOULD UPDATE", nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("APP WILL UPDATE", nextProps, nextState);
  }

  componentDidUpdate(nextProps, nextState) {
    console.log("APP DID UPDATE", nextProps, nextState);
  }

  componentWillReceiveProps(nextProps) {
    console.log("APP WILL RECEIVE PROPS", nextProps);
  }

  render() {
    console.log("APP RENDER");
    return (
      <div className="container">
        <div className="header"><Header /></div>
        <div className="body"><Body /></div>
        <div className="footer"><Footer /></div>
      </div>
    )
  };
}

export default App;
