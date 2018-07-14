import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from '../components/Home.js';
import Admin from '../components/Admin.js';
import Cart from '../components/Cart.js';

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Products" exact component={withRouter(Admin)} />
    <Route path="/Shop-n-cart" exact component={Cart} />
  </Switch>