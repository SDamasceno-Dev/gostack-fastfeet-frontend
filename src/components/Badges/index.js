import React from 'react';
import PropTypes from 'prop-types';

import { GoPrimitiveDot } from 'react-icons/go';

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

Badges.propTypes = {
  status: PropTypes.string.isRequired,
};
