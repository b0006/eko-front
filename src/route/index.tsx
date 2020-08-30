import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import StartPage from '../pages/StartPage';
import NotFoundPage from '../pages/NotFoundPage';
import ContactPage from '../pages/ContactPage';
import CatalogPage from '../pages/CatalogPage';
import LoginPage from '../pages/LoginPage';
import CategoryPage from '../pages/CategoryPage';

import { PublicRoute } from './types';

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute exact path="/" component={StartPage} />
      <PublicRoute exact path="/contacts" isWrappedContainer component={ContactPage} />
      <PublicRoute exact path="/catalog" isWrappedContainer component={CatalogPage} />
      <PublicRoute exact path="/catalog/:name" isWrappedContainer component={CategoryPage} />

      <Route exact path="/admin" component={LoginPage} />

      <PublicRoute path="*" isWrappedContainer component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
