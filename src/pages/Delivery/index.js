/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Page specific to show informarion about Delivery
 */

// Import dependencies
import React, { useState, useEffect } from 'react';

// Import Templates
import ListTemplate from '~/pages/_Layouts/listContainer';

import api from '~/services/api';

// import { Container } from './styles';

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
    toolBar: true,
  };

  // specific of the delivery
  const [search, setListSearch] = useState([]);

  useEffect(() => {
    async function loadSearch() {
      const response = await api.get('delivery');

      setListSearch(response.data);
    }
    loadSearch();
  }, []);

  return <ListTemplate configList={configList} search={search} />;
}
