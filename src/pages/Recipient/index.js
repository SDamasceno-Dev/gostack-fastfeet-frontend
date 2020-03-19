/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Page specific to show information about Recipient
 */

import React, { useEffect, useState } from 'react';

import api from '~/services/api';

// Import Templates
import ListTemplate from '~/pages/_Layouts/listContainer';

export default function Delivery() {
  const configList = {
    title: 'Gerenciando destinatários',
    label: ['ID', 'Nome', 'Endereço ', 'Ações'],
    toolsBar: true,
    inputPlaceholder: 'Buscar por destinatários',
    apiPath: 'recipient',
    switchParam: 'recipient',
  };

  const [search, setListSearch] = useState([]);
  const [query, setQuery] = useState();

  async function searchRecipient(q) {
    try {
      const response = await api.get('recipient', {
        params: { q },
      });
      setListSearch(response.data);
    } catch (err) {
      console.tron.log(err);
    }
  }

  useEffect(() => {
    searchRecipient(query);
  }, [query]);

  return (
    <ListTemplate
      configList={configList}
      searchData={search}
      searchFunction={() => searchRecipient()}
      searchQuery={setQuery}
    />
  );
}
