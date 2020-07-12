import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import StartPage from '../pages/StartPage';
import NotFoundPage from '../pages/NotFoundPage';

import { PublicRoute } from './types';

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute exact path="/" component={StartPage} />

      <PublicRoute path="*" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
