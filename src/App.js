import React from 'react';
import Login from './components/login/Login';
import Register from './components/register/Register'
import Home from './pages/Home'
import Users from './pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/home' component={Home} />
        <Route path='/users' component={Users} />
      </Switch>
    </Router>
  );
}

export default App;
