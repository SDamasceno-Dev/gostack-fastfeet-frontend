import React from 'react';
import { Link } from 'react-router-dom';
import { MdCheck, MdChevronLeft } from 'react-icons/md';

import { Container, InputSelect, FormElement, Input } from './delivFormStyles';

export default function DelivForm() {
  return (
    <Container>
      <div id="Title">
        <strong>Cadastro de encomendas</strong>
        <aside>
          <Link to="delivery">
            <div className="buttonBack">
              <MdChevronLeft color="#fff" size={25} />
              <span>VOLTAR</span>
            </div>
          </Link>
          <button type="button" className="btnSalvar">
            <MdCheck color="#fff" size={25} />
            <span>SALVAR</span>
          </button>
        </aside>
      </div>
      <div id="Form">
        <div>
          <FormElement>
            <strong>Destinatário</strong>
            <InputSelect />
          </FormElement>
          <FormElement>
            <strong>Entregador</strong>
            <InputSelect />
          </FormElement>
        </div>
        <div>
          <FormElement>
            <strong>Nome do produto</strong>
            <div>
              <Input />
            </div>
          </FormElement>
        </div>
      </div>
    </Container>
  );
}
