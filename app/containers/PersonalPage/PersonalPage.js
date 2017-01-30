import React, { Component } from 'react';

import OwnerPage from '../../components/OwnerPage/OwnerPage';

class PersonalPage extends Component {
  render() {
    return (
      <OwnerPage
        secretData="Secret"
      />
    );
  }
}

export default PersonalPage;
