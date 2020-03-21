import React from 'react';
import PropTypes from 'prop-types';

import { FaWindowClose } from 'react-icons/fa';

import DelivView from '~/pages/Delivery/delivView';
import DelivProbView from '~/pages/DeliveryProblem/DelivProbView';

import { Container, ModalWindow } from './styles';

export default function Modal({
  visible,
  showModal,
  data,
  switchActionParams,
}) {
  function switchModal(param) {
    switch (param) {
      case 'delivery':
        return <DelivView itemData={data} />;
      case 'deliveryproblem':
        return <DelivProbView itemData={data} />;
      default:
        return null;
    }
  }

  return (
    <Container>
      <ModalWindow visible={visible}>
        <div id="window">
          <button type="button" onClick={showModal}>
            <FaWindowClose color="#7d40e7" size={20} />
          </button>
          {switchModal(switchActionParams)}
        </div>
      </ModalWindow>
    </Container>
  );
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
};
