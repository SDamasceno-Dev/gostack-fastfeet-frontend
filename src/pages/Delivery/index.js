/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Page specific to show informarion about Delivery
 */

// Import dependencies
import React, { useEffect, useState } from 'react';

import api from '~/services/api';

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
      alert('Erro 2!');
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
