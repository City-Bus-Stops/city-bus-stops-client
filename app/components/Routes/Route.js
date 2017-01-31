import React, { PropTypes } from 'react';
import { Card, Grid, Button, Icon, Accordion } from 'semantic-ui-react';

import BusStopList from './BusStopsList';

const Route = ({ arrivalTime, From, To, points, changeMapState }) => (
  <Grid.Column>
    <Card
      fluid
      color="blue"
    >
      <Card.Content>
         <Card.Header>
           {points[0].name}: {arrivalTime}
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
        </Card.Header>
      </Card.Content>
      <Card.Content
        meta={
          <p>
            {`${From} - ${To}`}
          </p>
        }
      />
      <Card.Content extra className="card-extra-component">
        <Accordion>
          <Accordion.Title>
            <a>
              <Icon
                name="bus"
              />
              Show bus stops
            </a>
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
  To: PropTypes.string.isRequired
};

export default Route;
