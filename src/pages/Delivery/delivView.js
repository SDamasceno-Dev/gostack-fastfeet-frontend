import React from 'react';

import { DelivContainer } from './delivViewStyles';

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
          <span>{itemData.start_date}</span>
        </div>
        <div>
          <span id="label">Entrega: </span>
          <span>{itemData.end_date}</span>
        </div>
        <hr />
        <strong>Assinatura do destinatário</strong>
        <img
          id="signature"
          src="https://via.placeholder.com/234x36.png?text=Assinatura"
          alt="assinatura"
        />
      </div>
    </DelivContainer>
  );
}
