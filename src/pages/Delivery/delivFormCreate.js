import React from 'react';

import { MdCheck } from 'react-icons/md';

import { Container } from './styles';

export default function Delivery() {
  return (
    <Container>
      <div id="Title">
        <strong>Cadastro de encomendas</strong>
        <button type="button">
          <MdCheck color="#336699" size={14} />
          Salvar
        </button>
      </div>
    </Container>
  );
}
