import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Skills from './components/skills';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Vanessa Henson" subtitle="Web Developer"/>
        <Skills skills={['Hello', 'I', 'Love you', 'Won\'t you tell me your name']} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
