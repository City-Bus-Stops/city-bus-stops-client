import React, { PropTypes } from 'react';
import { Card, Grid, Button, Icon, Label, Header, Modal } from 'semantic-ui-react';

import BusStopList from './BusStopsList';

const Route = ({ arrivalTime, From, To, points, changeMapState, busNumber, bustStopName }) => (
  <Grid.Column>
    <Card fluid color="blue">
      <Card.Content>
        <Card.Header>
          <Label as="a" color="blue" ribbon size="large" horizontal>
            {bustStopName}: {arrivalTime}
          </Label>
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
          <Header as="h4" dividing color="grey">
            Bus number - {busNumber}
          </Header>
        </Card.Header>
        <Card.Description>
          {`${From} - ${To}`}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Modal
          trigger={
            <a>
              <Icon name="expand" />
              Show bus stops
            </a>
          }
          closeIcon="close"
          dimmer="blurring"
          closeOnEscape={true}
          closeOnRootNodeClick={false}
        >
          <Modal.Header>
            <Header as="h1" color="blue">
              {bustStopName}
            </Header>
          </Modal.Header>
          <Modal.Content>
            <Header as="h2" color="blue">
              Bus number - {busNumber}
              <Header.Subheader>
                Bus stops count: <strong>{points.length}</strong>
              </Header.Subheader>
            </Header>
            <Modal.Description>
              {points && <BusStopList busStops={points} />}
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Card.Content>
    </Card>
  </Grid.Column>
);

Route.propTypes = {
  arrivalTime: PropTypes.string.isRequired,
  From: PropTypes.string.isRequired,
  To: PropTypes.string.isRequired
};

export default Route;
