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
  configList: PropTypes.arrayOf([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]).isRequired,
  searchData: PropTypes.arrayOf([PropTypes.string, PropTypes.number])
    .isRequired,
};
