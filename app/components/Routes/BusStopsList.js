import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Grid, Card } from 'semantic-ui-react';
import _ from 'lodash';

const getColor = ({ index, length }) => {
  return _.isEqual(index, 0) ? 'green' : _.isEqual(index, length - 1) ? 'red' : 'blue';
};

const BusStopList = ({ busStops }) => (
  <Grid columns={3} padded stackable>
      {
        (busStops.map((busStop, index) =>
          <Grid.Column largeScreen="3" mobile="5" widescreen="4" key={busStop.id}>
            <Card fluid color={getColor({ index, length: busStops.length })} >
              <Card.Content>
                <Card.Header>
                  {busStop.name}
                </Card.Header>
                <Card.Description>After {busStop.time}.</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Link to="/">
                  Watch bus stop schedule
                </Link>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))
      }
  </Grid>
);

BusStopList.propTypes = {
  busStops: PropTypes.arrayOf(PropTypes.object)
};

BusStopList.defaultProps = {
  busStops: []
};

export default BusStopList;
