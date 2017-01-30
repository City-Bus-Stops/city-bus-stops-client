import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import appReducers from './reducers';
import signUpSuccess from './middlewares/siggnUpSuccess';
import logIn from './middlewares/logInSuccess';
import errorMiddleware from './middlewares/errorMiddleware';
import loading from './middlewares/loadingMiddleware';

const configureStore = () => {
  const middlewares = [
    thunk,
    createLogger(),
    signUpSuccess,
    logIn,
    errorMiddleware,
    loading,
  ];

  return createStore(
    appReducers,
    applyMiddleware(...middlewares),
  );
};

export default configureStore;
