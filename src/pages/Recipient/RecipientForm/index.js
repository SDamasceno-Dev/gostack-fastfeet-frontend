/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description:
 */

import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { MdCheck, MdChevronLeft } from 'react-icons/md';

import api from '~/services/api';

import { Container } from './styles';

export default function RecipientForm(props) {
  const dataItem = props.location.state;
  const { title } = dataItem;
  const { id } = dataItem.data;
  const [item, setItem] = useState(dataItem.data.searchItem);

  useEffect(() => {
    setItem(item);
  }, [item]);

  async function handleSubmit(data) {
    if (id === '') {
      try {
        await api.post('recipient', {
          name: data.name,
          street: data.street,
          number: data.number,
          complement: data.complement,
          city: data.city,
          state: data.state,
          zipcode: data.zipcode,
        });
        toast.success('Destinatário cadastrado com sucesso!');
      } catch (error) {
        console.tron.log(error);
        toast.error('Erro de conexão com o Banco de dados <db:recipient>!');
      }
    } else {
      try {
        await api.put('recipient', {
          id,
          name: data.name,
          street: data.street,
          number: data.number,
          complement: data.complement,
          city: data.city,
          state: data.state,
          zipcode: data.zipcode,
        });
        toast.success('Destinatário atualizado com sucesso!');
      } catch (error) {
        console.tron.log(error);
        toast.error('Erro de conexão com o Banco de dados <db:recipient>!');
      }
    }
  }

  return (
    <Container>
      <div id="Title">
        <strong>{title}</strong>
        <aside>
          <Link to="/recipient">
            <div className="buttonBack">
              <MdChevronLeft color="#fff" size={25} />
              <span>VOLTAR</span>
            </div>
          </Link>
          <button type="submit" form="RecipientForm" className="btnSalvar">
            <MdCheck color="#fff" size={25} />
            <span>SALVAR</span>
          </button>
        </aside>
      </div>
      <Form initialData={item} id="RecipientForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">
            Nome
            <Input id="nome" name="name" placeholder="Nome completo" />
          </label>
        </div>
        <div>
          <label htmlFor="rua">
            Rua
            <Input id="rua" name="street" placeholder="Rua" />
          </label>
          <label htmlFor="numero">
            Número
            <Input id="numero" name="number" placeholder="Número" />
          </label>
          <label htmlFor="complemento">
            Complemento
            <Input
              id="complemento"
              name="complement"
              placeholder="Complemento"
            />
          </label>
        </div>
        <div>
          <label htmlFor="cidade">
            Cidade
            <Input id="cidade" name="city" placeholder="Cidade" />
          </label>
          <label htmlFor="estado">
            Estado
            <Input id="estado" name="state" placeholder="Estado" />
          </label>
          <label htmlFor="cep">
            CEP
            <Input id="cep" name="zipcode" placeholder="CEP" />
          </label>
        </div>
      </Form>
    </Container>
  );
}
