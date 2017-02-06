import * as consts from '../src/consts';

/* eslint-disable no-unused-vars*/
const errorMiddleware = store => next => (action) => {
  switch (action.type) {
    case consts.FETCH_ROUTE_FAILURE:
    case consts.GET_LOCATION_FAILURE:
    case consts.GET_ADDRESS_FAILURE:
    case consts.BAD_INPUT_VALUE:
    case consts.SIGN_UP_FAILURE:
    case consts.LOG_IN_FAILURE:
    case consts.GET_POINT_INFO_FAILURE:
    case consts.GET_BUS_SCHEDULE_BY_BUSSTOP_NAME_FAILURE:
      store.dispatch({
        type: consts.ADD_ERROR_MESSAGE,
        errorType: action.type,
        errors: action.errors,
        errorTitle: action.title
      });
      return next(action);
    default:
      return next(action);
  }
};

export default errorMiddleware;
