/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Page specific to show information about Courier
 */

// Import dependencies
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import api from '~/services/api';

// Import Templates
import ListTemplate from '~/pages/_Layouts/listContainer';

export default function Courier() {
  const configList = {
    title: 'Gerenciando entregadores',
    firstColumn: '60px',
    label: ['ID', 'Foto', 'Nome', 'EMail', 'Ações'],
    toolsBar: true,
    inputPlaceholder: 'Buscar por entregadores',
    apiPath: 'courier',
    switchParam: 'courier',
  };

  const [search, setListSearch] = useState([]);
  const [query, setQuery] = useState();
  const [p, setPage] = useState(1);
  const [rowsTotal, setRowsTotal] = useState();

  // Get the list of all couriers in DB
  async function searchCourier(q, page) {
    try {
      const response = await api.get('courier', {
        params: {
          q,
          page,
        },
      });
      setListSearch(response.data.courierList);
      setRowsTotal(response.data.courierCount);
    } catch (error) {
      toast.error('Erro de conexão com o Banco de dados!');
    }
  }

  useEffect(() => {
    searchCourier(query, p);
  }, [query, p]);

  return (
    <ListTemplate
      configList={configList}
      searchData={search}
      searchFunction={() => searchCourier()}
      searchQuery={setQuery}
      changePage={setPage}
      rowsTotal={rowsTotal}
    />
  );
}
