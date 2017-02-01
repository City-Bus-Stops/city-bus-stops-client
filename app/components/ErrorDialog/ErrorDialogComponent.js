import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

import Messages from './ErrorMessages';

const ErrorDialogComponent = ({ closeDialog, ErrorMessages, DialogFlag, errorTitle }) => (
  <Modal
    open={DialogFlag}
    onClose={closeDialog}
    closeOnRootNodeClick={false}
    size="large"
  >
    <Header icon="warning circle" content={errorTitle} />
    <Modal.Content>
      {
        ErrorMessages &&
        <Messages
          messages={ErrorMessages}
        />
      }
    </Modal.Content>
    <Modal.Actions>
      <Button
        color="green"
        size="medium"
        onClick={closeDialog}
      >
        <Icon name="checkmark" /> Ok
      </Button>
    </Modal.Actions>
  </Modal>
);

export default ErrorDialogComponent;