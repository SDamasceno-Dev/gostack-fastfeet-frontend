/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Template for all listing
 */

// Import dependencies
import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import { FaPlus, FaSearch, FaSpinner } from 'react-icons/fa';

import RegisterActions from '~/components/RegisterActions';
import Modal from '~/components/Modal';

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

export default function ListTemplate({
  data,
  configList,
  loadSearch,
  setQuery,
}) {
  const { title, label, toolsBar, apiPath, inputPlaceholder } = configList;
  const loading = false;

  const [visible, setVisible] = useState(false);

  function handleQuerySearch({ query }) {
    if (query) {
      setQuery(query);
    } else {
      setQuery('');
    }
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
          {data.map(srch => (
            <ListElement key={srch.id} colQtd={label.length}>
              <span>#{srch.id}</span>
              <span>{srch.recipient.name}</span>
              <span>{srch.courier.name}</span>
              <span>{srch.recipient.city}</span>
              <span>{srch.recipient.state}</span>
              <span>{srch.createdAt}</span>
              <RegisterActions
                searchItem={srch}
                apiPath={apiPath}
                loadSearch={() => loadSearch()}
              />
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
  data: PropTypes.shape().isRequired,
  loadSearch: PropTypes.func.isRequired,
  setQuery: PropTypes.shape().isRequired,
};
