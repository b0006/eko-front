/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, BrowserRouter } from 'react-router-dom';

import { IndexPage } from './Index/Loadable';
import { NotFoundPage } from './NotFound/Loadable';
import { PublicRoute } from './types';

export const App: React.FC = () => (
  <BrowserRouter>
    <Helmet
      titleTemplate="%s - React Boilerplate"
      defaultTitle="React Boilerplate"
    >
      <meta name="description" content="A React Boilerplate application" />
    </Helmet>

    <Switch>
      <PublicRoute exact path="/" component={IndexPage} />
      <PublicRoute component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);
