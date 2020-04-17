/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Page specific to show information about Delivery
 */

// Import dependencies
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import api from '~/services/api';

// Import Templates
import ListTemplate from '~/pages/_Layouts/listContainer';

export default function Delivery() {
  const configList = {
    title: 'Gerenciando encomendas',
    firstColumn: '60px',
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
  const [p, setPage] = useState(1);
  const [rowsTotal, setRowsTotal] = useState();

  async function searchDeliv(q, page) {
    try {
      const response = await api.get('delivery', {
        params: {
          q,
          page,
        },
      });
      setListSearch(response.data.deliveryList);
      setRowsTotal(response.data.deliveryCount);
    } catch (error) {
      console.tron.log(error);
      toast.error('Erro de conexão com o Banco de dados <db:deliveries>!');
    }
  }

  useEffect(() => {
    searchDeliv(query, p);
  }, [query, p]);

  return (
    <ListTemplate
      configList={configList}
      searchData={search}
      searchFunction={() => searchDeliv()}
      searchQuery={setQuery}
      changePage={setPage}
      rowsTotal={rowsTotal}
    />
  );
}
