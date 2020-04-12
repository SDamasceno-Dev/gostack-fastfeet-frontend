/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: View all the details of the Delivery
 */

// Importing dependencies
import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '~/util/formatDate';

import signaturePlaceholder from '~/assets/signature_placeholder.jpg';

// Import the style used
import { DelivContainer } from './styles';

export default function Delivery({ itemData }) {
  return (
    <DelivContainer>
      <div>
        <strong>Informações da encomenda</strong>
        <div>
          {itemData.recipient.street}, {itemData.recipient.number}
        </div>
        <div>{itemData.recipient.complement}</div>
        <div>
          {itemData.recipient.city}, {itemData.recipient.state}
        </div>
        <div>{itemData.recipient.zipcode}</div>
        <hr />
        <strong>Datas</strong>
        <div>
          <span id="label">Retirada: </span>
          <span>
            {itemData.start_date !== null
              ? formatDate(itemData.start_date)
              : 'Sem informação'}
          </span>
        </div>
        <div>
          <span id="label">Entrega: </span>
          <span>
            {itemData.end_date !== null
              ? formatDate(itemData.end_date)
              : 'Sem informação'}
          </span>
        </div>
        <hr />
        <strong>Assinatura do destinatário</strong>
        <img
          id="signature"
          src={
            itemData.signature !== null
              ? itemData.signature.url
              : signaturePlaceholder
          }
          alt="assinatura"
        />
      </div>
    </DelivContainer>
  );
}

// PropTypes necessary
Delivery.propTypes = {
  itemData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};
