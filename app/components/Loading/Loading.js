import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const LoadingComponent = ({ isLoading }) => (
  <Dimmer active={isLoading}>
    <Loader>Loading</Loader>
  </Dimmer>
);

export default LoadingComponent;

