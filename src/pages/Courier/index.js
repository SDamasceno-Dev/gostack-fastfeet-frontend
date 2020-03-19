/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Page specific to show information about Courier
 */

// Import dependencies
import React, { useEffect, useState } from 'react';

import api from '~/services/api';

// Import Templates
import ListTemplate from '~/pages/_Layouts/listContainer';

export default function Courier() {
  const configList = {
    title: 'Gerenciando entregadores',
    label: ['ID', 'Foto', 'Nome', 'EMail', 'Ações'],
    toolsBar: true,
    inputPlaceholder: 'Buscar por entregadores',
    apiPath: 'courier',
    switchParam: 'courier',
  };

  const [search, setListSearch] = useState([]);
  const [query, setQuery] = useState();

  async function searchCourier(q) {
    try {
      const response = await api.get('courier', {
        params: { q },
      });
      setListSearch(response.data);
    } catch (err) {
      alert('Erro Banco de dados - Courier!');
    }
  }

  useEffect(() => {
    searchCourier(query);
  }, [query]);

  return (
    <ListTemplate
      configList={configList}
      searchData={search}
      searchFunction={() => searchCourier()}
      searchQuery={setQuery}
    />
  );
}
