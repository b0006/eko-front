import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import StartPage from '../pages/StartPage';
import NotFoundPage from '../pages/NotFoundPage';
import ContactPage from '../pages/ContactPage';
import CatalogPage from '../pages/CatalogPage';
import CategoryListPage from '../pages/CategoryListPage';
import LoginPage from '../pages/LoginPage';

import { PublicRoute } from './types';

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute exact path="/" component={StartPage} />
      <PublicRoute exact path="/contacts" isWrappedContainer component={ContactPage} />
      <PublicRoute exact path="/catalog" isWrappedContainer component={CatalogPage} />
      <PublicRoute exact path="/catalog/:category" isWrappedContainer component={CategoryListPage} />

      <Route exact path="/admin" component={LoginPage} />

      <PublicRoute path="*" isWrappedContainer component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
