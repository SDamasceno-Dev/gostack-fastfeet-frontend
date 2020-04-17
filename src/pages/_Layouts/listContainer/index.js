/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Template for all listing
 */

// Import dependencies
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';

// Import the icon used
import {
  FaPlus,
  FaSearch,
  FaSpinner,
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/fa';

// Import the pages used
import DelivList from '~/pages/Delivery/DelivList';
import CourierList from '~/pages/Courier/CourierList';
import RecipientList from '~/pages/Recipient/RecipientList';
import DelivProblemList from '~/pages/DeliveryProblem/DelivProblemList';

// Import the style used
import {
  Container,
  ToolsBar,
  BtnSearch,
  BtnRegister,
  ListContainer,
  ListHeader,
  ChangePageContainer,
  LabelPage,
  BtnPrevPage,
  BtnNextPage,
} from './styles';

export default function ListTemplate({
  configList,
  searchData,
  searchFunction,
  searchQuery,
  changePage,
  rowsTotal,
}) {
  const {
    title,
    firstColumn,
    label,
    toolsBar,
    inputPlaceholder,
    switchParam,
  } = configList;
  const loading = false;
  const [page, setPage] = useState(1);
  const totalPages = parseInt(rowsTotal / 7, 10) + (rowsTotal % 7 > 0 ? 1 : 0);

  // Passing params for the search
  function handleQuerySearch({ query }) {
    if (query) {
      searchQuery(query);
    } else {
      searchQuery('');
    }
  }

  function handleChangePage(direction) {
    if (direction === 'next' && page < totalPages) {
      setPage(page + 1);
    }

    if (direction === 'prev' && page > 1) {
      setPage(page - 1);
    }
  }

  useEffect(() => {
    changePage(page);
  }, [changePage, page]);

  // Function that defines wich list must be loaded
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
      case 'recipient':
        return (
          <RecipientList
            configList={configList}
            searchData={searchData}
            searchFunction={searchFunction}
          />
        );
      default:
        return (
          <DelivProblemList configList={configList} searchData={searchData} />
        );
    }
  }

  // Function that defines which values must be loaded to the form
  function switchBtnRegister(param) {
    switch (param) {
      case 'delivery':
        return {
          pathname: 'delivery/deliveryfrm',
          state: {
            title: 'Cadastro de encomendas',
            data: {
              id: '',
              product: '',
              recipient_id: '',
              courier_id: '',
              recipient_name: '',
              courier_name: '',
            },
          },
        };
      case 'courier':
        return {
          pathname: 'courier/courierfrm',
          state: {
            title: 'Cadastro de entregadores',
            data: {
              name: '',
              email: '',
              avatar_id: '',
            },
          },
        };
      default:
        return {
          pathname: 'recipient/recipientfrm',
          state: {
            title: 'Cadastro de destinatário',
            data: {
              id: '',
              name: '',
              street: '',
              number: '',
              complement: '',
              city: '',
              state: '',
              zipcode: '',
            },
          },
        };
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
          <BtnSearch loading={loading ? 1 : 0}>
            {loading ? (
              <FaSpinner color="#fff" size={14} />
            ) : (
              <FaSearch color="#fff" size={14} />
            )}
          </BtnSearch>
        </Form>

        <Link to={switchBtnRegister(switchParam)}>
          <BtnRegister>
            <FaPlus color="#fff" size={14} />
            <span>CADASTRAR</span>
          </BtnRegister>
        </Link>
      </ToolsBar>
      <ListContainer>
        <ListHeader firstColumn={firstColumn} colQtd={label.length}>
          {label.map(lbl => (
            <span key={lbl} className={lbl === 'Foto' ? 'center' : ''}>
              {lbl}
            </span>
          ))}
        </ListHeader>
        {switchList(switchParam)}
      </ListContainer>
      <LabelPage>Página</LabelPage>
      <ChangePageContainer>
        <BtnPrevPage onClick={() => handleChangePage('prev')}>
          <FaArrowLeft color="#fff" size={20} />
        </BtnPrevPage>
        {page}/{totalPages}
        <BtnNextPage onClick={() => handleChangePage('next')}>
          <FaArrowRight color="#fff" size={20} />
        </BtnNextPage>
      </ChangePageContainer>
    </Container>
  );
}

// PropTypes necessary
ListTemplate.propTypes = {
  configList: PropTypes.shape({
    title: PropTypes.string,
    firstColumn: PropTypes.string,
    label: PropTypes.array,
    toolsBar: PropTypes.bool,
    apiPath: PropTypes.string,
    inputPlaceholder: PropTypes.string,
    switchParam: PropTypes.string,
  }).isRequired,
  searchData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.symbol,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  searchFunction: PropTypes.func,
  searchQuery: PropTypes.func,
  changePage: PropTypes.func,
  rowsTotal: PropTypes.number,
};

ListTemplate.defaultProps = {
  searchQuery: () => {},
  changePage: () => {},
  searchFunction: () => {},
  rowsTotal: undefined,
};
