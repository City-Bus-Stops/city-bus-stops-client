import React, { PropTypes } from 'react';
import { Button } from 'semantic-ui-react';
import * as api from '../../src/api';

const OwnerPage = ({ secretData }) => {
  return (
    <div>
      {secretData}
      <Button
        basic
        onClick={() => {
          api.secretRequest()
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          });
        }}
      >Test request</Button>
    </div>
  );
};

OwnerPage.propTypes = {
  secretData: PropTypes.string.isRequired,
};

export default OwnerPage;
