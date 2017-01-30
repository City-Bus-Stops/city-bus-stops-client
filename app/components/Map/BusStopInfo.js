import React, { PropTypes } from 'react';
import { Container, Button, Header } from 'semantic-ui-react';
import _ from 'lodash';

import BusType from './BusType';

const BusStopInfo = ({ info, close }) => (
  <Container className="busStopInfo">
    {
      <div>
        <Header
          as="h2"
          textAlign="center"
          color="blue"
          content={info.name}
        />
        {_.isEmpty(info.buses) ?
          <Header as="h2" textAlign="center" color="blue" content={'Buses appear in the future'} /> :
          <BusType type="Bus" buses={info.buses} iconType="bus" />
        }
      </div>
    }
    <div>
    <Button
      className="butStopInfoButton"
      content="Close"
      fluid={true}
      color="yellow"
      size="large"
      attached="bottom"
      onClick={close}
    />
    </div>
  </Container>
);


BusStopInfo.propTypes = {
  info: PropTypes.object,
};

export default BusStopInfo;
