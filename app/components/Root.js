import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import 'semantic-ui-css/semantic.min.css';
import '../styles/styles.css';

import getRoutes from '../routes';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory} routes={getRoutes(store)} />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
