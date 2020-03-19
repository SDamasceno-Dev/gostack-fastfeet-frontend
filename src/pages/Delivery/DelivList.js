import React from 'react';

import RegisterActions from '~/components/RegisterActions';
import Badges from '~/components/Badges';

import { ListContent, ListElement } from './DelivListStyles';

export default function DelivList({ configList, searchData, searchFunction }) {
  const { label, apiPath } = configList;

  return (
    <ListContent>
      {searchData.map(srch => (
        <ListElement key={srch.id} colQtd={label.length}>
          <span>#{srch.id}</span>
          <span>{srch.recipient.name}</span>
          <span>
            <img src={srch.courier.avatar.url} alt="" />
            {srch.courier.name}
          </span>
          <span>{srch.recipient.city}</span>
          <span>{srch.recipient.state}</span>
          <span>
            <Badges status={srch.status} />
          </span>
          <RegisterActions
            searchItem={srch}
            apiPath={apiPath}
            searchFunction={() => searchFunction()}
            switchActionParams="delivery"
          />
        </ListElement>
      ))}
    </ListContent>
  );
}
