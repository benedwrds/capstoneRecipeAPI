import React from 'react'
import { Switch, Route } from 'react-router'
// import Home from './containers/Home'
// import About from './components/About'
// import Car from './containers/Car'
// import Dashboard from './containers/Dashboard'
// import Import from './containers/Import'
import Card from './components/Card';
const Router = () => {
    return (
        <Switch>
            {/* <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/car/:id" component={Car} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/import" component={Import} /> */}
            <Route path="/recipe" component={Card}/>
        </Switch>
    );
};

export default Router;