import React from 'react';
import PropTypes from 'prop-types';

import { FaWindowClose } from 'react-icons/fa';

import DelivView from '~/pages/Delivery/delivView';

import { Container, ModalWindow } from './styles';

export default function Modal({ visible, showModal, data }) {
  return (
    <Container>
      <ModalWindow visible={visible}>
        <div id="window">
          <button type="button" onClick={showModal}>
            <FaWindowClose color="#7d40e7" size={20} />
          </button>
          <DelivView itemData={data} />
        </div>
      </ModalWindow>
    </Container>
  );
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired,
};
