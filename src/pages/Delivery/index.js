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
  const srch = null;
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
    ColumnsList: [
      // <>
      //   {searchData.map(srch => (
      //     <ListElement key={srch.id} colQtd={label.length}>
      //       <span>#{srch.id}</span>
      //       <span>{srch.recipient.name}</span>
      //       <span>
      //         <img src={srch.courier.avatar.url} alt="" />
      //         {srch.courier.name}
      //       </span>
      //       <span>{srch.recipient.city}</span>
      //       <span>{srch.recipient.state}</span>
      //       <span>
      //         <Badges status={srch.status} />
      //       </span>
      //       <RegisterActions
      //         searchItem={srch}
      //         apiPath={apiPath}
      //         searchFunction={() => searchFunction()}
      //       />
      //     </ListElement>
      //   ))}
      //   <RegisterActions
      //     searchItem={srch}
      //     apiPath={apiPath}
      //     searchFunction={() => searchFunction()}
      //   />
      // </>,
    ],
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
      alert('Erro!');
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
