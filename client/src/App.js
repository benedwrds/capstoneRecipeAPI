import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import './App.css';

import {Provider} from "react-redux";
import store from "./store";

import Home from './components/Home'
import IndividualMeal from './components/IndividualMeal';
import NavBar from './components/NavBar'
import Login from './components/Login'
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Register from './components/Register'

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {

  return (
   
    <div className="App">
       <Provider store={store}>
      <Router>
      <NavBar/>
         <Switch> 
        <Route path="/" exact component={Home}/>
        <Route path="/meal/:id" component={IndividualMeal}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        {/* <Switch> */}
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
