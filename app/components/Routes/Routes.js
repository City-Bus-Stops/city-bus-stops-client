import React, { PropTypes } from 'react';
import { Grid, Segment } from 'semantic-ui-react';

import Route from './Route';

const Routes = ({ routes, From, To, changeMapState }) => (
  <Segment raised color="teal" size="large">
    <Grid columns={3} padded stackable>
      {
        routes ? (routes.map(route =>
          <Route
            key={route.id}
            From={From}
            To={To}
            changeMapState={changeMapState}
            {...route}
          />
        )) : null
      }
    </Grid>
  </Segment>
);

Routes.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Routes;
