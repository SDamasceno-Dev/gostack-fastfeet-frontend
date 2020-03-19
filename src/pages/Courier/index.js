/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Page specific to show informarion about Courier
 */

import React, { useEffect, useState } from 'react';

import api from '~/services/api';

// Import Templates
import ListTemplate from '~/pages/_Layouts/listContainer';

export default function Courier() {
  const configList = {
    title: 'Gerenciando encomendas',
    label: ['ID', 'Foto', 'Nome', 'EMail', 'Ações'],
    toolsBar: true,
    inputPlaceholder: 'Buscar por entregadores',
    apiPath: 'courier',
  };

  const [search, setListSearch] = useState([]);
  const [query, setQuery] = useState();

  async function searchCourier(q) {
    try {
      const response = await api.get('courier', {
        params: { q },
      });
      setListSearch(response.data);
    } catch (err) {}
  }

  useEffect(() => {
    searchCourier(query);
  }, [query]);

  console.tron.log('courier');

  return (
    <ListTemplate
      configList={configList}
      componentList={search}
      searchFunction={() => searchCourier()}
      setQuery={setQuery}
    />
  );
}
