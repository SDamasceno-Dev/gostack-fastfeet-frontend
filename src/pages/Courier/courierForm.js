import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/async';

import { Link } from 'react-router-dom';
import { MdCheck, MdChevronLeft } from 'react-icons/md';

import api from '~/services/api';

import { Container, FormElement, Input } from './courierFormStyles';

export default function DelivForm(props) {
  const dataItem = props.location.state;
  const { title } = dataItem;
  // const { product } = dataItem.data;

  const [recipientList, setRecipientList] = useState([]);

  async function loadRecipient(query) {
    try {
      await api.get('recipient', { params: { q: query } }).then(response => {
        const options = response.data.map(recipient => ({
          value: recipient.id,
          label: recipient.name,
        }));
        setRecipientList(options);
      });
    } catch (err) {
      alert('Erro ao carregar a lista!');
    }
  }

  useEffect(() => {
    loadRecipient();
  }, []);

  // Fill Selects with data

  const filterRecipient = inputValue => {
    return recipientList.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptionsRecipient = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(filterRecipient(inputValue));
      }, 1000);
    });

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
            <AsyncSelect
              cacheOptions
              defaultOptions
              loadOptions={promiseOptionsRecipient}
            />
          </FormElement>
          <FormElement>
            <strong>Entregador</strong>
            <AsyncSelect
              cacheOptions
              defaultOptions
              // loadOptions={promiseOptionsCourier}
            />
          </FormElement>
        </div>
        <div>
          <FormElement>
            <strong>Nome do produto</strong>
            <div>{/* <Input value={product} /> */}</div>
          </FormElement>
        </div>
      </div>
    </Container>
  );
}
