/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: List component for Delivery Page
 */

// Importing dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Import components
import RegisterActions from '~/components/RegisterActions';
import Badges from '~/components/Badges';

// Import the style used
import { ListContent, ListElement } from './styles';

export default function DelivList({ configList, searchData, searchFunction }) {
  const { label, apiPath, firstColumn } = configList;

  return (
    <ListContent>
      {/* Load each register on the list */}
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

// PropTypes necessary
DelivList.propTypes = {
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

DelivList.defaultProps = {
  searchFunction: () => {},
};
