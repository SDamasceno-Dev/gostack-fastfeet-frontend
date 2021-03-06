/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: List all Delivery problems
 */

// Importing dependencies
import React from 'react';
import PropTypes from 'prop-types';

import RegisterActions from '~/components/RegisterActions';

// Import the style used
import { ListContent, ListElement } from './styles';

export default function DelivProblemList({ configList, searchData }) {
  const { label, apiPath, firstColumn } = configList;

  return (
    <ListContent>
      {searchData.map(srch => (
        <ListElement
          key={srch.id}
          colQtd={label.length}
          firstColumn={firstColumn}
        >
          <span>#{srch.delivery_id}</span>
          <span>{srch.description}</span>
          <RegisterActions
            searchItem={srch}
            apiPath={apiPath}
            switchActionParams="deliveryproblem"
          />
        </ListElement>
      ))}
    </ListContent>
  );
}

// PropTypes necessary
DelivProblemList.propTypes = {
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
};
