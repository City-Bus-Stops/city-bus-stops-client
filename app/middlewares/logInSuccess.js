import { browserHistory } from 'react-router';
import * as consts from '../src/consts';

import Auth from '../src/utils/Auth';

/* eslint-disable no-unused-vars*/
const logIn = store => next => (action) => {
  switch (action.type) {
    case consts.LOG_IN_SUCCESS:
      Auth.authenticateUser(action.token, action.username);
      browserHistory.push('/');
      return next(action);
    case consts.LOG_OUT:
      Auth.deauthenticateUser();
      return next(action);
    default:
      return next(action);
  }
};

export default logIn;
