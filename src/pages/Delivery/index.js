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
  };

  const [search, setListSearch] = useState([]);
  const [query, setQuery] = useState();

  async function loadSearch(q) {
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
    loadSearch(query);
  }, [query]);

  return (
    <ListTemplate
      configList={configList}
      data={search}
      loadSearch={() => loadSearch()}
      setQuery={setQuery}
    />
  );
}
