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

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/meal/:id" component={IndividualMeal}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
