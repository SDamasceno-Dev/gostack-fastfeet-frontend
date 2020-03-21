/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Page specific to show informarion about Delivery Problem
 */

import React, { useEffect, useState } from 'react';

import api from '~/services/api';

// Import Templates
import ListTemplate from '~/pages/_Layouts/listContainer';

export default function DeliveryProblem() {
  const configList = {
    title: 'Problemas na entrega',
    label: ['Encomenda', 'Problema', 'Ações'],
    toolsBar: false,
    inputPlaceholder: 'Buscar por encomendas',
    apiPath: 'delivery',
    switchParam: 'delivery',
  };

  const [search, setListSearch] = useState([]);
  const [query, setQuery] = useState();

  async function searchDeliv(q) {
    try {
      const response = await api.get('delivery', {
        params: { q },
      });
      setListSearch(response.data);
    } catch (err) {
      console.tron.log(err);
    }
  }

  useEffect(() => {
    searchDeliv(query);
  }, [query]);

  return (
    <ListTemplate
      configList={configList}
      searchData={search}
      searchFunction={() => searchDeliv()}
      searchQuery={setQuery}
    />
  );
}
