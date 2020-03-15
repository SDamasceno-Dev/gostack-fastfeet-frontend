/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Default Layout Page
 */

//  Import dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Import default components
import Header from '~/components/Header';

// Import styles
import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

// Prop-Types Definitions
DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
