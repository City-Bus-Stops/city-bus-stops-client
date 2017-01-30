import React from 'react';
import { browserHistory } from 'react-router';

const NotFoundPage = () => (
  <Segment raised color="teal">
    <h1>Page not found</h1>
    <Button
      basic
      color="blue"
      content="Back"
      icon="reply"
      size="medium"
      onClick={() => {
        browserHistory.goBack();
      }}
    />
    <Image
      fluid
      src="app/src/images/NotFound.png"
      shape="rounded"
    />
  </Segment>
);

export default NotFoundPage;
