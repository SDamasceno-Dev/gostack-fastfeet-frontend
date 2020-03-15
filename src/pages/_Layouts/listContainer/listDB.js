import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';

import api from '~/services/api';

import {
  Container,
  Title,
  ToolsBar,
  InputSearch,
  BtnRegister,
  ListContainer,
  ListHeader,
  ListContent,
  ListElement,
} from './styles';

export default function ListTemplate() {
  // Sim a param passage
  const configList = {
    label: [
      'ID',
      'Destinatário',
      'Entregador',
      'Cidade',
      'Estado',
      'Status',
      'Ações',
    ],
    title: 'Gerenciando encomendas',
  };

  const { title, label } = configList;
  /** Start Screen01 */
  // specific of the delivery
  const [search, setListSearch] = useState([]);

  useEffect(() => {
    async function loadSearch() {
      const response = await api.get('delivery');

      setListSearch(response.data);
    }
    loadSearch();
  }, []);

  /** End Screen01 */

  return (
    <Container>
      <Title>
        <strong>{title}</strong>
      </Title>
      <ToolsBar>
        <InputSearch placeholder="Buscar por encomendas" />
        <BtnRegister>
          <FaPlus color="#fff" size={14} />
          <span>CADASTRAR</span>
        </BtnRegister>
      </ToolsBar>
      <ListContainer>
        <ListHeader qtdColumns={label.length}>
          <span>{label[0]}</span>
          <span>{label[1]}</span>
          <span>{label[2]}</span>
          <span>{label[3]}</span>
          <span>{label[4]}</span>
          <span>{label[5]}</span>
          <span>{label[6]}</span>
        </ListHeader>
        <ListContent>
          {search.map(srch => (
            <ListElement key={srch.id}>
              <span>#{srch.id}</span>
              <span>{srch.recipient.name}</span>
              <span>{srch.courier.name}</span>
              <span>{srch.recipient.city}</span>
              <span>{srch.recipient.state}</span>
              <span>{srch.createdAt}</span>
              <span>...</span>
            </ListElement>
          ))}
        </ListContent>
      </ListContainer>
    </Container>
  );
}
