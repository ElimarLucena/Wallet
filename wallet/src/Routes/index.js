import React from 'react';
import Login from '../pages/Login';
import Wallet from '../pages/Wallet';
import { Route, Switch } from 'react-router-dom'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/wallet" component={ Wallet } />
    </Switch> 
  )
}

export default Routes;