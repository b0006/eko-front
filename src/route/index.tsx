import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import StartPage from '../pages/StartPage';
import NotFoundPage from '../pages/NotFoundPage';
import LoginPage from '../pages/LoginPage';

import { PublicRoute } from './types';

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute exact path="/" component={StartPage} />

      <Route exact path="/admin" component={LoginPage} />

      <PublicRoute path="*" isWrappedContainer component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
