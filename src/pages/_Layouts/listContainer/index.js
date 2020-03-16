/**
 *
 */

// Import dependencies
import React from 'react';
import PropTypes from 'prop-types';

import { FaPlus } from 'react-icons/fa';

import Actions from '~/components/Actions';

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

export default function ListTemplate({ configList, search }) {
  const { title, label, toolBar } = configList;

  return (
    <Container>
      <Title>
        <strong>{title}</strong>
      </Title>
      <ToolsBar visible={toolBar}>
        <InputSearch placeholder="Buscar por encomendas" />
        <BtnRegister>
          <FaPlus color="#fff" size={14} />
          <span>CADASTRAR</span>
        </BtnRegister>
      </ToolsBar>
      <ListContainer>
        <ListHeader colQtd={label.length}>
          {label.map(lbl => (
            <span key={lbl}>{lbl}</span>
          ))}
        </ListHeader>
        <ListContent>
          {search.map(srch => (
            <ListElement key={srch.id} colQtd={label.length}>
              <span>#{srch.id}</span>
              <span>{srch.recipient.name}</span>
              <span>{srch.courier.name}</span>
              <span>{srch.recipient.city}</span>
              <span>{srch.recipient.state}</span>
              <span>{srch.createdAt}</span>
              <Actions />
            </ListElement>
          ))}
        </ListContent>
      </ListContainer>
    </Container>
  );
}

ListTemplate.propTypes = {
  configList: PropTypes.shape({
    title: PropTypes.string,
    label: PropTypes.array,
    toolBar: PropTypes.bool,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  search: PropTypes.array.isRequired,
};
