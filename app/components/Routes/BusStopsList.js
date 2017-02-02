import React, { PropTypes } from 'react';
import { List } from 'semantic-ui-react';

const BusStopList = ({ busStops }) => (
  <List relaxed>
    {
      (busStops.map(busStop =>
        <List.Item key={busStop.id}>
          <List.Content>
            {busStop.name}
          </List.Content>
        </List.Item>
      ))
    }
  </List>
);

BusStopList.propTypes = {
  busStops: PropTypes.arrayOf(PropTypes.object)
};

BusStopList.defaultProps = {
  busStops: []
};

export default BusStopList;
