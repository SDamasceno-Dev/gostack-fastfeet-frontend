/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description:
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';

import { Link } from 'react-router-dom';
import { MdCheck, MdChevronLeft } from 'react-icons/md';

import api from '~/services/api';

import { Container } from './courierFormStyles';

export default function DelivForm(props) {
  const dataItem = props.location.state;
  const { title } = dataItem;

  return (
    <Container>
      <div id="Title">
        <strong>{title}</strong>
        <aside>
          <Link to="/courier">
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
      <Form>
        <Input name="name" placeholder="Nome do entregador..." />
        <Input
          name="email"
          type="email"
          placeholder="Seu endereço de e-mail..."
        />
      </Form>
    </Container>
  );
}
