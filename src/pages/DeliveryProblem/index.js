/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Page specific to show informarion about Delivery Problem
 */

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import api from '~/services/api';

// Import Templates
import ListTemplate from '~/pages/_Layouts/listContainer';

export default function DeliveryProblem() {
  const configList = {
    title: 'Problemas na entrega',
    firstColumn: '215px',
    label: ['Encomenda', 'Problema', 'Ações'],
    toolsBar: false,
    inputPlaceholder: 'Buscar por encomendas',
    apiPath: 'deliveryproblem',
    switchParam: 'deliveryproblem',
  };

  const [search, setListSearch] = useState([]);
  const [p, setPage] = useState(1);
  const [rowsTotal, setRowsTotal] = useState();

  async function listDelivProblem(page) {
    try {
      const response = await api.get('delivery/problems', {
        params: {
          page,
        },
      });
      setListSearch(response.data.deliveriesProbList);
      setRowsTotal(response.data.deliveriesProbCount);
    } catch (error) {
      console.tron.log(error);
      toast.error(
        'Erro de conexão com o Banco de dados <db:deliveries_problem>!'
      );
    }
  }

  useEffect(() => {
    listDelivProblem(p);
  }, [p]);

  return (
    <ListTemplate
      configList={configList}
      searchData={search}
      searchFunction={() => listDelivProblem()}
      changePage={setPage}
      rowsTotal={rowsTotal}
    />
  );
}
