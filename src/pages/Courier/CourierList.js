/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: List component para Courier Page
 */

import React from 'react';

import RegisterActions from '~/components/RegisterActions';

import { ListContent, ListElement } from './CourierListStyles';

export default function CourierList({
  configList,
  searchData,
  searchFunction,
}) {
  const { label, apiPath } = configList;

  return (
    <ListContent>
      {console.tron.log(searchData)}
      {searchData.map(srch => (
        <ListElement key={srch.id} colQtd={label.length}>
          <span>#{srch.id}</span>
          <img src={srch.avatar.url} alt="" />
          <span>{srch.name}</span>
          <span>{srch.email}</span>
          <RegisterActions
            searchItem={srch}
            apiPath={apiPath}
            searchFunction={() => searchFunction()}
            switchActionParams="courier"
          />
        </ListElement>
      ))}
    </ListContent>
  );
}
