/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Component Actions usable on all lists
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';

import { FaEllipsisH, FaEye, FaPen, FaTrashAlt } from 'react-icons/fa';

import Modal from '~/components/Modal';

import { Container, ActionBtnMenu, ActionMenu, ActionItem } from './styles';

import api from '~/services/api';

export default function Actions({
  searchItem,
  apiPath,
  searchFunction,
  switchActionParams,
}) {
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
    try {
      if (click) {
        await api.delete(apiPath, { params: { idItem: searchItem.id } });
        searchFunction();
      }
    } catch (error) {
      console.tron.log(error);
      toast.error('O registro não foi deletado. Por favor ');
    }
  }

  function switchActionsButtons(switchButtons) {
    switch (switchButtons) {
      case 'delivery':
        return (
          <ActionMenu visible={visible}>
            <Modal
              visible={modVisible}
              showModal={() => handleToggleModVisible()}
              data={searchItem}
              switchActionParams={switchActionParams}
            />
            <ActionItem onClick={handleToggleModVisible}>
              <FaEye color="#8E5BE8" size={15} />
              <span>Visualizar</span>
            </ActionItem>
            <ActionItem>
              <Link
                to={{
                  pathname: 'delivery/deliveryfrm',
                  state: {
                    data: {
                      id: searchItem.id,
                      product: searchItem.product,
                      recipient_id: searchItem.recipient_id,
                      courier_id: searchItem.courier_id,
                      recipient_name: searchItem.recipient.name,
                      courier_name: searchItem.courier.name,
                    },
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
        );
      case 'courier':
        return (
          <ActionMenu visible={visible}>
            <ActionItem>
              <Link
                to={{
                  pathname: 'courier/courierfrm',
                  state: {
                    data: {
                      id: searchItem.id,
                      name: searchItem.name,
                      email: searchItem.email,
                      avatar_id: searchItem.avatar_id,
                      avatar_url: searchItem.avatar.url,
                    },
                    title: 'Edição de entregadores',
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
        );
      case 'recipient':
        return (
          <ActionMenu visible={visible}>
            <ActionItem>
              <Link
                to={{
                  pathname: 'recipient/recipientfrm',
                  state: {
                    data: { id: searchItem.id, searchItem },
                    title: 'Edição de destinatário',
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
        );
      case 'deliveryproblem':
        return (
          <ActionMenu visible={visible}>
            <Modal
              visible={modVisible}
              showModal={() => handleToggleModVisible()}
              data={searchItem}
              switchActionParams={switchActionParams}
            />
            <ActionItem onClick={handleToggleModVisible}>
              <FaEye color="#8E5BE8" size={15} />
              <span>Visualizar</span>
            </ActionItem>
            <ActionItem
              onClick={() => handleDeleteItem(searchItem.delivery_id)}
            >
              <FaTrashAlt color="#DE3B3B" size={15} />
              <span>Cancelar encomenda</span>
            </ActionItem>
          </ActionMenu>
        );
      default:
        return null;
    }
  }

  return (
    <Container>
      <ActionBtnMenu type="ActionBtnMenu" onClick={handleToggleVisible}>
        <FaEllipsisH color="#C6C6C6" size={15} />
      </ActionBtnMenu>
      {switchActionsButtons(switchActionParams)}
    </Container>
  );
}

Actions.propTypes = {
  searchItem: PropTypes.shape().isRequired,
  apiPath: PropTypes.string.isRequired,
  searchFunction: PropTypes.func.isRequired,
  id: PropTypes.string,
  switchActionParams: PropTypes.string.isRequired,
};

Actions.defaultProps = {
  id: '',
};
