import React from 'react';
import { Header, Modal } from 'semantic-ui-react';

import Messages from './ErrorMessages';

const ErrorDialogComponent = ({ closeDialog, ErrorMessages, DialogFlag }) => (
  <Modal
    open={DialogFlag}
    onClose={closeDialog}
    closeOnRootNodeClick={false}
    size="small"
    dimmer="blurring"
    closeIcon="close"
  >
    <Header color="red" icon="warning circle" content="Error" />
    <Modal.Content>
      {
        ErrorMessages &&
        <Messages
          errors={ErrorMessages}
        />
      }
    </Modal.Content>
  </Modal>
);

export default ErrorDialogComponent;
