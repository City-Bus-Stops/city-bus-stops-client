import React, { PropTypes } from 'react';
import { Header, Modal } from 'semantic-ui-react';
import _ from 'lodash';

import BusType from './BusType';

const BusStopInfo = ({ info, close, open }) => (
  <Modal
    open={open}
    closeOnEscape={true}
    closeOnRootNodeClick={false}
    onClose={close}
    closeIcon="close"
    dimmer="blurring"
  >
    <Modal.Header>
      <Header
        as="h2"
        textAlign="center"
        color="blue"
        content={info.name}
      />
    </Modal.Header>
    <Modal.Content>
      {_.isEmpty(info.buses) ?
        <Header as="h2" textAlign="center" color="blue" content={'Buses appear in the future'} /> :
        <BusType type="Bus" buses={info.buses} iconType="bus" />
      }
    </Modal.Content>
  </Modal>
);

BusStopInfo.propTypes = {
  info: PropTypes.object
};

BusStopInfo.defaultProps = {
  info: {
    name: 'Default Name'
  }
};

export default BusStopInfo;
