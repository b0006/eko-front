import React from 'react';
import { Helmet } from 'react-helmet-async';
import './style.scss';

export const NotFoundPage: React.FC = () => (
  <>
    <Helmet>
      <title>404 Page Not Found</title>
      <meta name="description" content="Page not found" />
    </Helmet>
    <div>
      <div>
        4
        <span role="img" aria-label="Crying Face">
          😢
        </span>
        4
      </div>
      <p className="p">Page not found.</p>
    </div>
  </>
);
