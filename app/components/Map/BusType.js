import React from 'react';
import { Container, Header, Card } from 'semantic-ui-react';

const BusType = ({ type, buses, iconType }) => (
  <Container>
    <Header as="h2" icon={iconType} content={type} />
    {
      buses ? (buses.map(bus =>
        <Card fluid color="teal" raised={true} key={bus.id}>
          <Card.Content
            header={
              <Header as="h4" floated="left" content={`Bus number: ${bus.number}`} />
            }
          />
          <Card.Content
            description={
              <Header as="h3" floated="left" content={bus.time} />
            }
          />
          <Card.Content
            meta={
              `To ${bus.to}>`
            }
          />
        </Card>
      )) : null
    }
  </Container>
);

export default BusType;
