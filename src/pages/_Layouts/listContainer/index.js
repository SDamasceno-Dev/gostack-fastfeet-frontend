/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Template for all listing
 */

// Import dependencies
import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import { FaPlus, FaSearch, FaSpinner } from 'react-icons/fa';

import DelivList from '~/pages/Delivery/DelivList';
import CourierList from '~/pages/Courier/CourierList';

import {
  Container,
  ToolsBar,
  BtnSearch,
  BtnRegister,
  ListContainer,
  ListHeader,
} from './styles';

export default function ListTemplate({
  configList,
  searchData,
  searchFunction,
  searchQuery,
}) {
  const { title, label, toolsBar, inputPlaceholder, switchParam } = configList;
  const loading = false;

  function handleQuerySearch({ query }) {
    if (query) {
      searchQuery(query);
    } else {
      searchQuery('');
    }
  }

  function switchList(listComponent) {
    switch (listComponent) {
      case 'delivery':
        return (
          <DelivList
            configList={configList}
            searchData={searchData}
            searchFunction={searchFunction}
          />
        );
      case 'courier':
        return (
          <CourierList
            configList={configList}
            searchData={searchData}
            searchFunction={searchFunction}
          />
        );
      default:
        return null;
    }
  }

  return (
    <Container>
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
        <Link
          to={{
            pathname: 'deliveryfrm',
            state: {
              title: 'Cadastro de encomendas',
            },
          }}
        >
          <BtnRegister>
            <FaPlus color="#fff" size={14} />
            <span>CADASTRAR</span>
          </BtnRegister>
        </Link>
      </ToolsBar>
      <ListContainer>
        <ListHeader colQtd={label.length}>
          {label.map(lbl => (
            <span key={lbl}>{lbl}</span>
          ))}
        </ListHeader>
        {switchList(switchParam)}
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
  searchData: PropTypes.shape().isRequired,
  searchFunction: PropTypes.func.isRequired,
  searchQuery: PropTypes.shape().isRequired,
};
