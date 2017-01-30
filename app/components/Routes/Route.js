import React, { PropTypes } from 'react';
import { Card, Grid, Button, Icon, Accordion, Header } from 'semantic-ui-react';
import _ from 'lodash';

import BusStopList from './BusStopsList';

const Route = ({ arrivalTime, From, To, points, changeMapState }) => (
  <Grid.Column>
    <Card
      fluid
      color="teal"
    >
      <Card.Content
        header={`${_.head(points).name}: ${arrivalTime}`}
      />
      <Card.Content
        meta={
          <p>{`${From} - ${To}`}
            <Button
              size="medium"
              icon
              basic
              circular
              floated="right"
              onClick={() => {
                changeMapState();
              }}
            >
              <Icon name="street view" color="teal" />
            </Button>
          </p>
        }
      />
      <Card.Content extra className="card-extra-component">
        <Accordion>
          <Accordion.Title>
            <Icon
              name="settings"
            />
            <Header as="h5" icon size="tiny">
              Show bus stops
            </Header>
          </Accordion.Title>
          <Accordion.Content>
            <Card.Content
              description={<BusStopList bustStops={points} />}
            />
          </Accordion.Content>
        </Accordion>
      </Card.Content>
    </Card>
  </Grid.Column>
);

Route.propTypes = {
  arrivalTime: PropTypes.string.isRequired,
  From: PropTypes.string.isRequired,
  To: PropTypes.string.isRequired,
};

export default Route;
