import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../pages/Home';
import Users from '../pages/Users'
import React from "react";
function AppNavigator() {
    return (
      <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/userprofile" exact component={Users} />
          </Switch>
      </Router>
    );
  }
  
  export default AppNavigator;