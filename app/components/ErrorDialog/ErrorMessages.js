import React, { PropTypes } from 'react';
import { Message } from 'semantic-ui-react';

const Messages = ({ errors }) => (
  <div className="error-messages">
    {
      errors && errors.map((error, index) =>
        <Message
          key={index}
          size="big"
          header={error.type}
          list={error.messages}
        />
      )}
  </div>
);

Messages.propTypes = {
  errors: PropTypes.array.isRequired
};

export default Messages;
