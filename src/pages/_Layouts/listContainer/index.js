/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Template for all listing
 */

// Import dependencies
import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import { FaPlus, FaSearch, FaSpinner } from 'react-icons/fa';

import RegisterActions from '~/components/RegisterActions';
import Modal from '~/components/Modal';

import api from '~/services/api';

import {
  Container,
  ToolsBar,
  BtnSearch,
  BtnRegister,
  ListContainer,
  ListHeader,
  ListContent,
  ListElement,
} from './styles';

export default function ListTemplate({ configList }) {
  const { title, label, toolsBar, apiPath, inputPlaceholder } = configList;
  const loading = false;

  const [search, setListSearch] = useState([]);
  const [queryParam, setQuery] = useState();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    async function loadSearch() {
      const response = await api.get(apiPath, {
        params: { q: queryParam },
      });

      setListSearch(response.data);
    }
    loadSearch();
  }, [apiPath, queryParam]);

  function handleQuerySearch({ query }) {
    console.tron.log(query);
    setQuery(query);
  }

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Modal visible={visible} showModal={() => handleToggleVisible()} />
      <div id="Title">
        <strong>{title}</strong>
      </div>
      <ToolsBar visible={toolsBar}>
        <Form onSubmit={handleQuerySearch}>
          <div id="Form">
            <FaSearch color="#999999" size={14} />
            <Input name="query" placeholder={inputPlaceholder} />
          </div>
          <BtnSearch loading={loading}>
            {loading ? (
              <FaSpinner color="#fff" size={14} />
            ) : (
              <FaSearch color="#fff" size={14} />
            )}
          </BtnSearch>
        </Form>
        <BtnRegister onClick={handleToggleVisible}>
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
              <RegisterActions />
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
    toolsBar: PropTypes.bool,
    apiPath: PropTypes.string,
    inputPlaceholder: PropTypes.string,
  }).isRequired,
};
