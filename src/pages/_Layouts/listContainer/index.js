import React from 'react';
import { FaPlus } from 'react-icons/fa';

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

export default function listContainer() {
  return (
    <Container>
      <Title>
        <strong>Gerenciando encomendas</strong>
      </Title>
      <ToolsBar>
        <InputSearch placeholder="Buscar por encomendas" />
        <BtnRegister>
          <FaPlus color="#fff" size={14} />
          <span>CADASTRAR</span>
        </BtnRegister>
      </ToolsBar>
      <ListContainer>
        <ListHeader>
          <span>label</span>
          <span>label</span>
          <span>label</span>
          <span>label</span>
          <span>label</span>
          <span>label</span>
          <span>label</span>
        </ListHeader>
        <ListContent>
          <ListElement>
            <span>#01</span>
            <span>#02</span>
            <span>#03</span>
            <span>#04</span>
            <span>#05</span>
            <span>#06</span>
            <span>#07</span>
          </ListElement>
          <ListElement>
            <span>#01</span>
            <span>#02</span>
            <span>#03</span>
            <span>#04</span>
            <span>#05</span>
            <span>#06</span>
            <span>#07</span>
          </ListElement>
          <ListElement>
            <span>#01</span>
            <span>#02</span>
            <span>#03</span>
            <span>#04</span>
            <span>#05</span>
            <span>#06</span>
            <span>#07</span>
          </ListElement>
        </ListContent>
      </ListContainer>
    </Container>
  );
}
