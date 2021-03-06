/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Form for edit and registry a new Courier
 */

// Importing dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

// Import the icon to be used
import { MdCheck, MdChevronLeft } from 'react-icons/md';

import api from '~/services/api';

// Import the pages used
import AvatarInput from '~/pages/Courier/AvatarInput';

// Import the style used
import { Container } from './styles';

export default function CourierProfile(props) {
  const { location } = props;
  const { state } = location;
  const dataItem = state;
  const { title } = dataItem;
  const { id, avatar_url } = dataItem.data;

  // Register a Courier
  async function regCourier(data) {
    try {
      if (id === undefined) {
        await api.post('courier', {
          name: data.name,
          email: data.email,
          avatar_id: data.avatar_id,
        });
        toast.success('Entregador cadastrado com sucesso!');
      } else {
        await api.put('courier', {
          id,
          name: data.name,
          email: data.email,
          avatar_id: data.avatar_id,
        });
        toast.success('Entregador atualizado com sucesso!');
      }
    } catch (error) {
      console.tron.log(error);
      toast.error(
        'Erro ao tentar registrar o entregador! Verifique os dados inseridos e tente novamente. Se o erro persistir, entre em contato com o suporte técnico.'
      );
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
        <AvatarInput name="avatar_id" avatar_url={avatar_url} />
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

// PropTypes necessary
CourierProfile.propTypes = {
  location: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
};
