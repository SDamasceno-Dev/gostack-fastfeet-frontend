/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Page specific to show information about Recipient
 */

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import api from '~/services/api';

// Import Templates
import ListTemplate from '~/pages/_Layouts/listContainer';

export default function Recipient() {
  const configList = {
    title: 'Gerenciando destinatários',
    firstColumn: '60px',
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
    } catch (error) {
      alert('04');
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
