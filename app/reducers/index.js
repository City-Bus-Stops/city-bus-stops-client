import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import searchRoute from './searchRoute';
import getError from './errorDialog';
import loading from './loading';
import logIn from './logIn';
import signUp from './signUp';

export default combineReducers({
  form,
  searchRoute,
  getError,
  logIn,
  signUp,
  loading
});
