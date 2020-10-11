import React from 'react';
import { Helmet } from 'react-helmet-async';

export function IndexPage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A Boilerplate application index page"
        />
      </Helmet>
      <span>IndexPage container</span>
    </>
  );
}
