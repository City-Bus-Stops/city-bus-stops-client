import React, { PropTypes } from 'react';
import { List } from 'semantic-ui-react';

const BusStopList = ({ bustStops }) => (
  <List divided relaxed>
    {
      bustStops ? (bustStops.map(busStop =>
        <List.Item key={busStop.id}>
          <List.Content>
            {busStop.name}
          </List.Content>
        </List.Item>
      )) : null
    }
  </List>
);

BusStopList.propTypes = {
  bustStops: PropTypes.arrayOf(PropTypes.object),
};


export default BusStopList;
