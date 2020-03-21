/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: List component para Courier Page
 */

import React from 'react';
import PropTypes from 'prop-types';

import RegisterActions from '~/components/RegisterActions';

import { ListContent, ListElement } from './CourierListStyles';

export default function CourierList({
  configList,
  searchData,
  searchFunction,
}) {
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

CourierList.propTypes = {
  configList: PropTypes.shape({
    title: PropTypes.string,
    label: PropTypes.array,
    toolsBar: PropTypes.bool,
    apiPath: PropTypes.string,
    inputPlaceholder: PropTypes.string,
    switchParam: PropTypes.string,
  }).isRequired,
  searchData: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array])
  ).isRequired,
  searchFunction: PropTypes.func.isRequired,
};
