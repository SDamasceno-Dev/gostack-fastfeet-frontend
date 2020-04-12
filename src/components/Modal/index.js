/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Component Modal used in the App
 */

// Importing dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Import the icon used
import { FaWindowClose } from 'react-icons/fa';

// Import the pages used
import DelivView from '~/pages/Delivery/DelivView';
import DelivProbView from '~/pages/DeliveryProblem/DelivProbView';

// Import the style used
import { Container, ModalWindow } from './styles';

export default function Modal({
  visible,
  showModal,
  data,
  switchActionParams,
}) {
  // Function that determines which page should be loaded
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

// PropTypes necessary
Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired,
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.symbol,
    PropTypes.object,
  ]).isRequired,
  switchActionParams: PropTypes.string.isRequired,
};
