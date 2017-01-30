import { browserHistory } from 'react-router';
import * as consts from '../src/consts';

/* eslint-disable no-unused-vars*/
const signUpSuccess = store => next => (action) => {
  if (action.type === consts.SIGN_UP_SUCCESS) {
    browserHistory.push('login');
  }
  return next(action);
};

export default signUpSuccess;
