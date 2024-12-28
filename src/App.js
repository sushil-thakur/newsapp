
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <NavBar />
        <News pageSize={5} country="us" category/>
        <Switch>
          <Route path="/about"> <About />
          </Route>
          
        </Switch>
     </Router>
      </div>
    )
  }
}



