/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Personalized Route Configuration
 */

//  Import dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

// Import Layout pages of App
import AuthLayout from '~/pages/_Layouts/auth';
import DefaultLayout from '~/pages/_Layouts/default';

import { store } from '~/store';

export default function RouteWrapper({
  component: Component,
  isPrivate, // Define the private pgaes
  ...rest
}) {
  const { signed } = store.getState().auth; // Inform the login status of user

  // Redirect a user not logged out a private page
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  // Redirect a user logged, that is outside the App, to Delivery List
  if (signed && !isPrivate) {
    return <Redirect to="/delivery" />;
  }

  // Conditional to define wich page will be loaded
  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

// Prop-Types Definitions
RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
