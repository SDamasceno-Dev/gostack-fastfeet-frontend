/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Component Actions usable on all lists
 */

// Importing dependencies
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

// Import the icon used
import { FaEllipsisH, FaEye, FaPen, FaTrashAlt } from 'react-icons/fa';

// Import components used
import Modal from '~/components/Modal';

// Import the style used
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

  // Change the visibility of modal
  function handleToggleModVisible() {
    setModVisible(!modVisible);
  }

  // Controls the visibility of Action Menu
  const node = useRef();
  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    setVisible(false);
  };

  useEffect(() => {
    if (visible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [visible]);

  // Async function to delete the registry
  async function handleDeleteItem() {
    const click = window.confirm('Deseja realmente excluir o registro?');
    try {
      if (switchActionParams === 'delivery') {
        // Verifies if Delivery has problem registered. If true cannot be deleted
        const response = await api.get(`/delivery/${searchItem.id}/problems`);
        console.tron.log(response);
        if (response.data.deliveryProblemsList.length > 0) {
          alert(
            'Este registro não pode ser cancelado pois possui problemas registrados. Caso precise deletar esse registro, entre em contato com o suporte técnico.'
          );
          return;
        }

        // Verifies if Delivery has altready ended. If true cannot be deleted
        if (searchItem.end_date !== null) {
          alert('Esta entrega não pode ser deletada pois já foi finalizada!');
          return;
        }
      } else if (switchActionParams === 'courier') {
        // Verifies if courier has delivery registered
        const response = await api.get(`/courier/${searchItem.id}/deliveries`);
        if (response.data.length > 0) {
          alert(
            'Este entregador possui encomendas registradas. Retire primeiro as encomendas para poder deletar seu registro.'
          );
          return;
        }
      }

      if (click) {
        await api
          .delete(apiPath, {
            params: { idItem: searchItem.id },
          })
          .then(() => {
            toast.success('Registro deletado!');
            searchFunction();
          })
          .catch(error => {
            toast.error(
              `Registro não pode ser deletado!
              ${error.response.data.error}`
            );
            console.tron.log(error.response);
          });
      }
    } catch (err) {
      toast.error(
        'O registro não pode ser deletado. Por favor, tente mais tarde ou informe ao suporte técnico.'
      );
    }
  }

  // Async function that cancel a delivery
  async function handleCancelDeliv(deliveryProblemId) {
    const click = window.confirm('Deseja realmente cancelar a entrega?');
    try {
      if (click) {
        await api.delete(`/problem/${deliveryProblemId}/cancel-delivery`);
        toast.success('A entrega foi cancelada com sucesso!');
      }
    } catch (error) {
      console.tron.log(error);
      toast.error(
        'A entrega não foi cancelada. Verifique as informações prestadas!'
      );
    }
  }

  // The function that, based on the passed parameters, defines which Action
  // Buttons to be loaded
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
            {/* <ActionItem onClick={handleDeleteItem}> */}
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
            <ActionItem onClick={() => handleCancelDeliv(searchItem.id)}>
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
    <Container ref={node}>
      <ActionBtnMenu type="ActionBtnMenu" onClick={() => setVisible(!visible)}>
        <FaEllipsisH color="#C6C6C6" size={15} />
      </ActionBtnMenu>
      {switchActionsButtons(switchActionParams)}
    </Container>
  );
}

// PropTypes necessary
Actions.propTypes = {
  searchItem: PropTypes.shape().isRequired,
  apiPath: PropTypes.string.isRequired,
  searchFunction: PropTypes.func,
  id: PropTypes.string,
  switchActionParams: PropTypes.string.isRequired,
};

Actions.defaultProps = {
  id: '',
  searchFunction: () => {},
};
