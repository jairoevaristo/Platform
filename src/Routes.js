import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact /> 
        <Route path="/dashboard" component={Dashboard} exact /> 
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;