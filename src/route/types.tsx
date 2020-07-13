import React from 'react';
import { Route, RouteComponentProps, RouteProps } from 'react-router-dom';

import HeaderLayout from '../layouts/Header';

interface IRouteComponentProps extends RouteProps {
  component: React.ComponentType<RouteComponentProps>;
  isWrappedContainer?: boolean;
}

const PublicRoute: React.FC<IRouteComponentProps> = ({ component: Component, isWrappedContainer, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <HeaderLayout isWrappedContainer={isWrappedContainer}>
        <Component {...props} />
      </HeaderLayout>
    )}
  />
);

export { PublicRoute };
