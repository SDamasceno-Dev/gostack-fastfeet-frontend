/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Page specific to show informarion about Delivery
 */

// Import dependencies
import React from 'react';

// Import Templates
import ListTemplate from '~/pages/_Layouts/listContainer';

export default function Delivery() {
  const configList = {
    title: 'Gerenciando encomendas',
    label: [
      'ID',
      'Destinatário',
      'Entregador',
      'Cidade',
      'Estado',
      'Status',
      'Ações',
    ],
    toolsBar: true,
    inputPlaceholder: 'Buscar por encomendas',
    apiPath: 'delivery',
  };

  return <ListTemplate configList={configList} />;
}
