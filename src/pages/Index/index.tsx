import React from 'react';
import { Helmet } from 'react-helmet-async';

export const IndexPage: React.FC = () => (
  <>
    <Helmet>
      <title>Home Page</title>
      <meta name="description" content="A Boilerplate application index page" />
    </Helmet>
    <div className="container">
      <span>IndexPage container</span>
    </div>
  </>
);
