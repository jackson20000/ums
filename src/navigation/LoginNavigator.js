import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import NotFound from '../components/404/Notfound';


const LoginNavigator = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route  component={NotFound} />
      </Switch>
    </Router>
  );
};
export default LoginNavigator;
