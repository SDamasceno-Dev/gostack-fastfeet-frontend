/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description:
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';

import { Link } from 'react-router-dom';
import { MdCheck, MdChevronLeft } from 'react-icons/md';

import api from '~/services/api';

import AvatarInput from '~/pages/Courier/AvatarInput';

import { Container } from './styles.js';

export default function CourierProfile(props) {
  const dataItem = props.location.state;
  const { title } = dataItem;
  const { id, name, email } = dataItem.data;

  async function regCourier(data) {
    try {
      if (id === undefined) {
        await api.post('courier', {
          name: data.name,
          email: data.email,
          avatar_id: data.avatar_id,
        });
      } else {
        await api.put('courier', {
          id,
          name: data.name,
          email: data.email,
          avatar_id: data.avatar_id,
        });
      }
    } catch (error) {
      // Error 😨
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request);
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log('Error', error.message);
      }
      console.log(error);
    }
  }

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
          <button type="submit" form="CourierForm" className="btnSalvar">
            <MdCheck color="#fff" size={25} />
            <span>SALVAR</span>
          </button>
        </aside>
      </div>
      <Form initialData={dataItem.data} id="CourierForm" onSubmit={regCourier}>
        <AvatarInput name="avatar_id" />
        <label htmlFor="name">
          Nome
          <Input id="name" name="name" placeholder="Nome do entregador..." />
        </label>
        <label htmlFor="email">
          Email
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Seu endereço de e-mail..."
          />
        </label>
      </Form>
    </Container>
  );
}

CourierProfile.defaultProps = {
  state: {
    data: {
      id: '',
      name: '',
      email: '',
      avatar_id: '',
      avatar_url: '',
    },
  },
};
