import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select/async';

import { Link } from 'react-router-dom';
import { MdCheck, MdChevronLeft } from 'react-icons/md';

import api from '~/services/api';

import { Container, FormElement, Input } from './delivFormStyles';

export default function DelivForm(props) {
  const dataItem = props.location.state;
  const { title } = dataItem;
  const { product } = dataItem.data;

  function courierList(query) {
    return api
      .get('courier', { params: { q: query } })
      .then(response => {
        const options = response.data.map(courier => ({
          value: courier.id,
          label: courier.name,
        }));
        return options;
      })
      .catch(error => {
        console.tron.log(error);
      });
  }

  console.tron.log(courierList);

  return (
    <Container>
      <div id="Title">
        <strong>{title}</strong>
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
            <Select
              id="recipientSelect"
              name="courier_id"
              cacheOptions
              defaultOptions
              loadOptions={courierList}
            />
          </FormElement>
          <FormElement>
            <strong>Entregador</strong>
            <Select
              id="courierSelect"
              name="courier_id"
              cacheOptions
              defaultOptions
              loadOptions={courierList}
            />
          </FormElement>
        </div>
        <div>
          <FormElement>
            <strong>Nome do produto</strong>
            <div>
              <Input value={product} />
            </div>
          </FormElement>
        </div>
      </div>
    </Container>
  );
}
