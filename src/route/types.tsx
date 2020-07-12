import React from 'react';
import { Route, RouteComponentProps, RouteProps } from 'react-router-dom';

import HeaderLayout from '../layouts/Header';

interface IRouteComponentProps extends RouteProps {
  component: React.ComponentType<RouteComponentProps>;
}

const PublicRoute: React.FC<IRouteComponentProps> = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <HeaderLayout>
        <Component {...props} />
      </HeaderLayout>
    )}
  />
);

export { PublicRoute };
