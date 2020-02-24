import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from 'react-router-dom';





class App extends Component {
  render(){
  return (
    <div className="App">
  <Toolbar/>
  <main style={{marginTop:'64px'}}>
    <p>lol </p>
  </main>
  </div>

  );
}
}

export default App;
