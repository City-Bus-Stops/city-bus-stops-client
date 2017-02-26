import React from 'react';
import { browserHistory } from 'react-router';
import { Segment, Icon, Header } from 'semantic-ui-react';

const NotFoundPage = () => (
  <Segment padded vertical textAlign="center">
    <Header as="h1" color="red" textAlign="center">404 page not found</Header>
    <Header
      as="h4"
      color="red"
      textAlign="center"
      icon
    >
      We are sorry but the page you are looking for does not exist.
    </Header>
    <Icon
      circular
      size="big"
      name="reply all"
      onClick={() => {
        browserHistory.goBack();
      }}
    />
  </Segment>
);

export default NotFoundPage;
