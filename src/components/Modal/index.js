import React from 'react';
import PropTypes from 'prop-types';

import DelivFormRegister from '~/pages/Delivery/delivFormCreate';

import { Container, ModalWindow } from './styles';

export default function Modal({ visible, showModal }) {
  return (
    <Container>
      <ModalWindow visible={visible}>
        <div id="window">
          <button type="button" onClick={showModal}>
            123
          </button>
          <DelivFormRegister />
        </div>
      </ModalWindow>
    </Container>
  );
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired,
};
