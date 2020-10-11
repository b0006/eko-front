import React from 'react';
import { Route, RouteComponentProps, RouteProps } from 'react-router-dom';

import Layout from '../modules/common/components/Layout';

interface IRouteComponentProps extends RouteProps {
  component: React.ComponentType<RouteComponentProps>;
  isWrappedContainer?: boolean;
}

const PublicRoute: React.FC<IRouteComponentProps> = ({
  component: Component,
  isWrappedContainer,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

export { PublicRoute };
