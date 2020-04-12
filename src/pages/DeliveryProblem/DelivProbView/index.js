/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: View the problem of a Delivery
 */

// Importing dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Import the style used
import { Container } from './styles';

export default function DelivProbView({ itemData }) {
  return (
    <Container>
      <strong>VISUALIZAR PROBLEMA</strong>
      <div>{itemData.description}</div>
    </Container>
  );
}

// PropTypes necessary
DelivProbView.propTypes = {
  itemData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};
