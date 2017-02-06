import React, { PropTypes } from 'react';
import { Card, Grid, Button, Icon, Label, Header, Modal } from 'semantic-ui-react';
import _ from 'lodash';

import BusStopList from './BusStopsList';

const Route = props => (
  <Grid.Column>
    <Card fluid color="blue">
      <Card.Content>
        <Card.Header>
          <Label as="a" color="blue" ribbon size="large" horizontal>
            {props.bustStopName}: {props.arrivalTime}
          </Label>
          <Button
            size="medium"
            icon
            basic
            circular
            floated="right"
            onClick={() => {
              props.changeMapState();
            }}
          >
            <Icon name="street view" color="teal" />
          </Button>
          <Header as="h4" dividing color="grey">
            Bus number - {props.busNumber}
          </Header>
        </Card.Header>
        <Card.Description>
          {`${props.From} - ${props.To}`}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Header
          as="h5"
          color="blue"
          onClick={() => {
            props.getBusScheduleByBusStop({
              id: props.id,
              firstPointName: props.firstPointName,
              lastPointName: props.lastPointName
            });
          }}
        >
          <Icon name="expand" />
          <Header.Content>
            <a>Show bus stops</a>
          </Header.Content>
        </Header>
        {
          !_.isEmpty(props.points) &&
          <Modal
            closeIcon="close"
            dimmer="blurring"
            closeOnEscape={true}
            closeOnRootNodeClick={false}
            defaultOpen={!_.isEmpty(props.points)}
            onClose={props.removePoints}
          >

            <Modal.Header>
              <Header as="h1" color="blue">
                {props.bustStopName}
              </Header>
            </Modal.Header>
            <Modal.Content>
              <Header as="h2" color="blue">
                Bus number - {props.busNumber}
                <Header.Subheader>
                  Bus stops count: {props.points.length}
                </Header.Subheader>
              </Header>
              <Modal.Description>
                <BusStopList busStops={props.points} />
              </Modal.Description>
            </Modal.Content>
          </Modal>
        }
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
