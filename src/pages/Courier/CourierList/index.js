/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: List component para Courier Page
 */

// Importing dependencies
import React from 'react';
import PropTypes from 'prop-types';

import RegisterActions from '~/components/RegisterActions';

// Import the style used
import { ListContent, ListElement } from './styles';

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

// PropTypes necessary
CourierList.propTypes = {
  configList: PropTypes.shape({
    title: PropTypes.string,
    label: PropTypes.array,
    toolsBar: PropTypes.bool,
    apiPath: PropTypes.string,
    inputPlaceholder: PropTypes.string,
    switchParam: PropTypes.string,
    firstColumn: PropTypes.string,
  }).isRequired,
  searchData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.symbol,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  searchFunction: PropTypes.func,
};

CourierList.defaultProps = {
  searchFunction: () => {},
};
