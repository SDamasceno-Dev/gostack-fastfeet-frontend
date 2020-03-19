/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Component Actions usable on all lists
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { FaEllipsisH, FaEye, FaPen, FaTrashAlt } from 'react-icons/fa';

import Modal from '~/components/Modal';

import { Container, ActionBtnMenu, ActionMenu, ActionItem } from './styles';

import api from '~/services/api';

export default function Actions({ searchItem, apiPath, searchFunction }) {
  const { id, product, recipient_id, courier_id } = searchItem;
  const [visible, setVisible] = useState(false);
  const [modVisible, setModVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleToggleModVisible() {
    setModVisible(!modVisible);
  }

  async function handleDeleteItem() {
    const click = window.confirm('Deseja realmente excluir o registro?');
    if (click) {
      await api.delete(apiPath, { params: { idItem: id } });
      searchFunction();
    }
  }

  return (
    <Container>
      <Modal
        visible={modVisible}
        showModal={() => handleToggleModVisible()}
        data={searchItem}
      />
      <ActionBtnMenu type="ActionBtnMenu" onClick={handleToggleVisible}>
        <FaEllipsisH color="#C6C6C6" size={15} />
      </ActionBtnMenu>
      <ActionMenu visible={visible}>
        <ActionItem onClick={handleToggleModVisible}>
          <FaEye color="#8E5BE8" size={15} />
          <span>Visualizar</span>
        </ActionItem>
        <ActionItem>
          <Link
            to={{
              pathname: 'deliveryfrm',
              state: {
                data: { product, recipient_id, courier_id },
                title: 'Edição de encomendas',
              },
            }}
          >
            <FaPen color="#4D85EE" size={13} />
            <span>Editar</span>
          </Link>
        </ActionItem>
        <ActionItem onClick={handleDeleteItem}>
          <FaTrashAlt color="#DE3B3B" size={15} />
          <span>Excluir</span>
        </ActionItem>
      </ActionMenu>
    </Container>
  );
}

Actions.propTypes = {
  searchItem: PropTypes.shape().isRequired,
  apiPath: PropTypes.string.isRequired,
  searchFunction: PropTypes.shape().isRequired,
  id: PropTypes.string,
};

Actions.defaultProps = {
  id: '',
};
