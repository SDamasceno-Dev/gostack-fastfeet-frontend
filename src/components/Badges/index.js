/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Component Badges used in the "Managing orders" list in the
 * Status column
 */

// Importing dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Import the icon to be used
import { GoPrimitiveDot } from 'react-icons/go';

// Import the style used
import { Badge, BadgeContent } from './styles';

export default function Badges({ status }) {
  const label = status;

  return (
    <Badge status={status}>
      <BadgeContent>
        <GoPrimitiveDot size={20} />
        <div>{label}</div>
      </BadgeContent>
    </Badge>
  );
}

// PropTypes necessary
Badges.propTypes = {
  status: PropTypes.string.isRequired,
};
