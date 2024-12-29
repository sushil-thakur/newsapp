
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <NavBar />
        <Switch> exact 
          <Route  exact path="/"> <News key="general" pageSize={5} country="us" category="general" />
          <Route  exact path="/Business"> <News key="Business" pageSize={5} country="us" category="Business" /></Route>
          <Route  exact path="/Entertainment"> <News key="general" pageSize={5} country="us" category="general" /></Route>
          <Route  exact path="/health"> <News key="health" pageSize={5} country="us" category="health" /></Route>
          <Route  exact path="/science"> <News key="science" pageSize={5} country="us" category="science" /></Route>
          <Route  exact path="/sport"> <News key="sport" pageSize={5} country="us" category="sport" /></Route>
          <Route  exact path="/technology"> <News key="technology" pageSize={5} country="us" category="technology" /></Route>

          </Route>
          
        </Switch>
     </Router>
      </div>
    )
  }
}



