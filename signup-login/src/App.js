import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header"><Header /></div>
        <div className="body"><Body /></div>
        <div className="footer"><Footer /></div>
      </React.Fragment>
    )
  };
}

export default App;
