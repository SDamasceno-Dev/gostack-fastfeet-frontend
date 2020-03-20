import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select/async';

import { Link } from 'react-router-dom';
import { MdCheck, MdChevronLeft } from 'react-icons/md';

import api from '~/services/api';

import { Container, FormElement, Input } from './delivFormStyles';

export default function DelivForm(props) {
  const dataItem = props.location.state;
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
        const options = response.data.map(recipient => ({
          value: recipient.id,
          label: recipient.name,
        }));
        return options;
      })
      .catch(error => {
        console.tron.log(error);
      });
  }

  // Get all courier registers
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

  // Function that get React-Select item selected on change
  const [recipSelected, setRecip] = useState([recipient_id, recipient_name]);
  const [courierSelected, setCourier] = useState([courier_id, courier_name]);
  const [input, setInput] = useState(product);
  console.tron.log(
    'verificação',
    id,
    input,
    recipSelected[0],
    courierSelected[0]
  );
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
      } catch (err) {
        console.tron.log(err);
      }
    } else {
      try {
        await api.put('delivery', {
          id,
          product: input,
          recipient_id: recipSelected[0],
          courier_id: courierSelected[0],
        });
      } catch (err) {
        console.tron.log(err);
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

DelivForm.propTypes = {
  location: PropTypes.arrayOf([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
};
