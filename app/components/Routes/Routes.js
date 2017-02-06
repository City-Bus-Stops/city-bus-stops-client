import React, { PropTypes } from 'react';
import { Grid } from 'semantic-ui-react';
import _ from 'lodash';

import Route from './Route';

const Routes = ({ routes, From, To, changeMapState, getBusScheduleByBusStop, points, removePoints }) => (
  <Grid columns={3} padded stackable>
    {
      routes ? (routes.map(route =>
        <Route
          key={route.id}
          From={From}
          To={To}
          changeMapState={changeMapState}
          getBusScheduleByBusStop={getBusScheduleByBusStop}
          removePoints={removePoints}
          points={!_.isEmpty(points) && _.isEqual(route.id, points.id) ? points.data : []}
          {...route}
        />
      )) : null
    }
  </Grid>
);

Routes.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default Routes;
