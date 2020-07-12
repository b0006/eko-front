import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import StartPage from '../pages/StartPage';
import NotFoundPage from '../pages/NotFoundPage';
import AboutPage from '../pages/AboutPage';

import { PublicRoute } from './types';

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute exact path="/" component={StartPage} />
      <PublicRoute exact path="/about" component={AboutPage} />

      <PublicRoute path="*" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
