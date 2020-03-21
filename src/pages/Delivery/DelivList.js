/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: List component para Delivery Page
 */

import React from 'react';
import PropTypes from 'prop-types';

import RegisterActions from '~/components/RegisterActions';
import Badges from '~/components/Badges';

import { ListContent, ListElement } from './DelivListStyles';

export default function DelivList({ configList, searchData, searchFunction }) {
  const { label, apiPath, firstColumn } = configList;

  return (
    <ListContent>
      {searchData.map(srch => (
        <ListElement
          key={srch.id}
          colQtd={label.length}
          firstColumn={firstColumn}
        >
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

DelivList.propTypes = {
  configList: PropTypes.arrayOf([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
  searchData: PropTypes.arrayOf([PropTypes.array]).isRequired,
  searchFunction: PropTypes.func.isRequired,
};
