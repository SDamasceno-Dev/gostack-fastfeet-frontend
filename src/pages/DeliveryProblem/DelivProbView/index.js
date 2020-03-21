import React from 'react';

import { Container } from './styles';

export default function DelivProbView({ itemData }) {
  return (
    <Container>
      <strong>VISUALIZAR PROBLEMA</strong>
      <div>{itemData.description}</div>
    </Container>
  );
}
