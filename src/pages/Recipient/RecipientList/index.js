import React from 'react';
import PropTypes from 'prop-types';

import RegisterActions from '~/components/RegisterActions';

import { ListContent, ListElement } from './styles';

export default function RecipientList({
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
          <span>{srch.name}</span>
          <span>{`${srch.street}, ${srch.number}, ${srch.city} - ${srch.state} `}</span>
          <RegisterActions
            searchItem={srch}
            apiPath={apiPath}
            searchFunction={() => searchFunction()}
            switchActionParams="recipient"
          />
        </ListElement>
      ))}
    </ListContent>
  );
}

RecipientList.propTypes = {
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
  searchFunction: PropTypes.func.isRequired,
};
