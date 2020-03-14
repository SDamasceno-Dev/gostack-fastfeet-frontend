/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Default Layout Page
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

// Prop-Types Definitions
DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
