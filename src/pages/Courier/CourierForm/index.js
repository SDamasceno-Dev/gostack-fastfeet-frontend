/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description:
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import { MdCheck, MdChevronLeft } from 'react-icons/md';

import api from '~/services/api';

import AvatarInput from '~/pages/Courier/AvatarInput';

import { Container } from './styles';

export default function CourierProfile(props) {
  const { location } = props;
  const { state } = location;
  const dataItem = state;
  const { title } = dataItem;
  const { id, avatar_url } = dataItem.data;

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
      toast.error('Erro de conexão com o Banco de dados <db:courier>!');
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
