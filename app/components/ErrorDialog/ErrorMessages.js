import React, { PropTypes } from 'react';
import { List } from 'semantic-ui-react';
import voca from 'voca';

const Messages = ({ messages }) => (
  <List divided relaxed size="big">
    {
      messages && Object.keys(messages).map(index =>
        <List.Item key={index}>
          <List.Content>
            <List.Header>{voca.capitalize(index)}</List.Header>
            <List.Description>{messages[index]}</List.Description>
          </List.Content>
        </List.Item>
      )}
  </List>
);

Messages.propTypes = {
  messages: PropTypes.object.isRequired
};

export default Messages;
