/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Page specific to show informarion about Delivery
 */

import React from 'react';
import api from '~/services/api';

// import { Container } from './styles';

export default function Delivery() {
  api.get('courier');
  return <h1>Delivery</h1>;
}
