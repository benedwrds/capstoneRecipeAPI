import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from './components/Home'
import IndividualMeal from './components/IndividualMeal';
import NavBar from './components/NavBar'
import Login from './components/Login'
function App() {

  return (
    <div className="App">
      <Router>
      <NavBar/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/meal/:id" component={IndividualMeal}/>
        <Route path="/login" component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
