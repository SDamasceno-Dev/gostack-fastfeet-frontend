/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Page specific to show information about Recipient
 */

// Importing dependencies
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
  const [p, setPage] = useState(1);
  const [rowsTotal, setRowsTotal] = useState();

  async function searchRecipient(q, page) {
    try {
      const response = await api.get('recipient', {
        params: {
          q,
          page,
        },
      });
      setListSearch(response.data.recipientList);
      setRowsTotal(response.data.recipientCount);
    } catch (error) {
      console.tron.log(error);
      toast.error('Erro de conexão com o Banco de dados <db:recipient>!');
    }
  }

  useEffect(() => {
    searchRecipient(query, p);
  }, [query, p]);

  return (
    <ListTemplate
      configList={configList}
      searchData={search}
      searchFunction={() => searchRecipient()}
      searchQuery={setQuery}
      changePage={setPage}
      rowsTotal={rowsTotal}
    />
  );
}
