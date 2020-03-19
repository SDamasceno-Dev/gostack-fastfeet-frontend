import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/async';

import { Link } from 'react-router-dom';
import { MdCheck, MdChevronLeft } from 'react-icons/md';

import api from '~/services/api';

import { Container, InputSelect, FormElement, Input } from './delivFormStyles';

export default function DelivForm(props) {
  const dataItem = props.location.state;
  const { title } = dataItem;
  const { product } = dataItem.data;

  const [recipientList, setRecipientList] = useState([]);
  const [courierList, setCourierList] = useState([]);

  async function loadCourier() {
    try {
      const response = await api.get('courier');
      setCourierList(response.data);
    } catch (err) {
      alert('Erro ao carregar a lista!');
    }
  }

  useEffect(() => {
    loadCourier();
  }, []);

  async function loadRecipient() {
    try {
      const response = await api.get('recipient');
      setRecipientList(response.data);
    } catch (err) {
      alert('Erro ao carregar a lista!');
    }
  }

  useEffect(() => {
    loadRecipient();
  }, []);

  const recipId = recipientList.map(id => id.id);

  // Fill Selects with data

  const filterRecipient = inputValueRecipient => {
    return recipId.filter(i =>
      i.label.toLowerCase().includes(inputValueRecipient.toLowerCase())
    );
  };

  const promiseOptionsRecipient = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(filterRecipient(inputValue));
      }, 1000);
    });

  const filterCourier = inputValueCourier => {
    return courierList.filter(i =>
      i.label.toLowerCase().includes(inputValueCourier.toLowerCase())
    );
  };

  const promiseOptionsCourier = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(filterCourier(inputValue));
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
              loadOptions={promiseOptionsCourier}
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
