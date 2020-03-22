import React from 'react';
import PropTypes from 'prop-types';

import RegisterActions from '~/components/RegisterActions';

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
  searchData: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array])
  ).isRequired,
};
