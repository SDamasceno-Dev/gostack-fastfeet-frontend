/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Form to register a new Delivery or edit one
 */

// Importing dependencies
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

// Import elements to be used
import Select from 'react-select/async';
import { Link } from 'react-router-dom';

// Import the icon to be used
import { MdCheck, MdChevronLeft } from 'react-icons/md';

import api from '~/services/api';

// Import the style used
import { Container, FormElement, Input } from './styles';

export default function DelivForm(props) {
  const { location } = props;
  const { state } = location;
  const dataItem = state;
  const { title } = dataItem;
  const { id } = dataItem.data;
  const { product } = dataItem.data;
  const { recipient_id } = dataItem.data;
  const { recipient_name } = dataItem.data;
  const { courier_id } = dataItem.data;
  const { courier_name } = dataItem.data;

  // Get all recipient registers
  function recipientList(query) {
    return api
      .get('recipient', { params: { q: query } })
      .then(response => {
        const options = response.data.recipientList.map(recipient => ({
          value: recipient.id,
          label: recipient.name,
        }));
        return options;
      })
      .catch(error => {
        console.tron.log(error);
        toast.error(
          'Listagem de clientes não foi carregada. Verifique a sua conexão com o Banco de dados.'
        );
      });
  }

  // Get all courier registers
  function courierList(query) {
    return api
      .get('courier', { params: { q: query } })
      .then(response => {
        const options = response.data.courierList.map(courier => ({
          value: courier.id,
          label: courier.name,
        }));
        return options;
      })
      .catch(error => {
        console.tron.log(error);
        toast.error(
          'Listagem de entregadores não foi carregada. Verifique a sua conexão com o Banco de dados.'
        );
      });
  }

  // Function that get React-Select item selected on change
  const [recipSelected, setRecip] = useState([recipient_id, recipient_name]);
  const [courierSelected, setCourier] = useState([courier_id, courier_name]);
  const [input, setInput] = useState(product);
  function viewRecipChange(optionSelected) {
    setRecip([optionSelected.value, optionSelected.label]);
  }

  function viewCourierChange(optionSelected) {
    setCourier([optionSelected.value, optionSelected.label]);
  }

  async function recordDelivForm() {
    if (id === '') {
      try {
        await api.post('delivery', {
          product: input,
          recipient_id: recipSelected[0],
          courier_id: courierSelected[0],
        });
        toast.success('Entrega cadastrada com sucesso!!!');
      } catch (error) {
        toast.error('Entrega não foi cadastrada!');
      }
    } else {
      try {
        await api.put('delivery', {
          id,
          product: input,
          recipient_id: recipSelected[0],
          courier_id: courierSelected[0],
        });
        toast.success('Entrega alterada com sucesso!!!');
      } catch (error) {
        toast.error('Entrega não foi alterada!');
      }
    }
  }

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
          <button type="button" className="btnSalvar" onClick={recordDelivForm}>
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
              name="recipient"
              cacheOptions
              defaultOptions
              defaultValue={{
                label: `${recipient_name}`,
                value: recipient_id,
              }}
              loadOptions={recipientList}
              onChange={viewRecipChange}
              isMulti={false}
              placeholder="Escolha um destinatário..."
            />
          </FormElement>
          <FormElement>
            <strong>Entregador</strong>
            <Select
              id="courierSelect"
              name="courier"
              cacheOptions
              defaultOptions
              defaultValue={{
                label: `${courier_name}`,
                value: courier_id,
              }}
              loadOptions={courierList}
              onChange={viewCourierChange}
              placeholder="Escolha um entregador..."
            />
          </FormElement>
        </div>
        <div>
          <FormElement>
            <strong>Nome do produto</strong>
            <div>
              <Input
                onChange={e => setInput(e.target.value)}
                name="productName"
                defaultValue={product}
              />
            </div>
          </FormElement>
        </div>
      </div>
    </Container>
  );
}

// PropTypes necessary
DelivForm.propTypes = {
  location: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
};
