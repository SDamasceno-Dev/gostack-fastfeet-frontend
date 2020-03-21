/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Page specific to show informarion about Delivery Problem
 */

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import api from '~/services/api';

// Import Templates
import ListTemplate from '~/pages/_Layouts/listContainer';

export default function DeliveryProblem() {
  const configList = {
    title: 'Problemas na entrega',
    firstColumn: '215px',
    label: ['Encomenda', 'Problema', 'Ações'],
    toolsBar: false,
    inputPlaceholder: 'Buscar por encomendas',
    apiPath: 'deliveryproblem',
    switchParam: 'deliveryproblem',
  };

  const [search, setListSearch] = useState([]);

  async function listDelivProblem() {
    try {
      const response = await api.get('delivery/problems');
      setListSearch(response.data);
    } catch (error) {
      alert('03');
    }
  }

  useEffect(() => {
    listDelivProblem();
  }, []);

  return (
    <ListTemplate
      configList={configList}
      searchData={search}
      searchFunction={() => listDelivProblem()}
    />
  );
}
