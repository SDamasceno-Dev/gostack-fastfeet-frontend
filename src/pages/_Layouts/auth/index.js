/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Authentication Layout Page
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function AuthLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

// Prop-Types Definitions
AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
