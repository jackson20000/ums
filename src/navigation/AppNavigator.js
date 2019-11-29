import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";
import Home from '../pages/Home';
import Users from '../pages/Users';
import NotFound from '../components/404/Notfound';
import User from '../pages/User'
import React from "react";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

function AppNavigator(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/users/:id" component={User} />
        <Route path="/" exact component={Home} />
        <Route path="/users" component={Users} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => ({
  state: state.login
});
export default connect(mapStateToProps)(AppNavigator);