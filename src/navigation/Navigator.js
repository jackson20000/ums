import React from "react";
import AppNavigator from "./AppNavigator";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import LoginNavigator from "./LoginNavigator";

const Navigator = ({ ...props }) => {
  React.useEffect(() => {}, [props.loginState.userId]);
  const displayComponent = () =>
    props.loginState.login ? <AppNavigator /> : <LoginNavigator />;
  return (
    <Router>
      <Switch>
        <Route path="/" component={displayComponent} />
      </Switch>
    </Router>
  );
};

const mapStateToProps = state => ({
  loginState: state.login
});
export default connect(mapStateToProps, {})(Navigator);
