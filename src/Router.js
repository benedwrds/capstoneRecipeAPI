import React from 'react'
import { Switch, Route } from 'react-router'
import IndividualMeal from './components/IndividualMeal';
//import Home from './containers/Home'
// import About from './components/About'
// import Car from './containers/Car'
// import Dashboard from './containers/Dashboard'
// import Import from './containers/Import'
import Login from './components/Login';
import IndividualMeal from './components/Login';
//import Card from './components/Card';

const Router = () => {
    return (
        <Switch>
             <Route exact path="/" component={Home} />
             {/* <Route path="/about" component={About} />
            <Route path="/car/:id" component={Car} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/import" component={Import} /> */}
            <Route path="/login" component={Login}/>
            <Route path="/recipe" component={IndividualMeal}/>
        </Switch>
    );
};

export default Router;