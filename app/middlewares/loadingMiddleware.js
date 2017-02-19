import * as consts from '../src/consts';

/* eslint-disable no-unused-vars*/
const loading = store => next => (action) => {
  switch (action.type) {
    case consts.INPUT_DATA:
    case consts.GET_ADDRESS:
    case consts.POST_LOG_IN_DATA:
    case consts.POST_SIGN_UP_DATA:
    case consts.GET_POINT_INFO:
    case consts.GET_BUS_SCHEDULE_BY_BUSSTOP_NAME:
      store.dispatch({
        type: consts.OPEN_LOADING
      });
      return next(action);
    case consts.FETCH_ROUTE_SUCCESS:
    case consts.FETCH_ROUTE_FAILURE:
    case consts.GET_ADDRESS_SUCCESS:
    case consts.GET_ADDRESS_FAILURE:
    case consts.LOG_IN_SUCCESS:
    case consts.LOG_IN_FAILURE:
    case consts.SIGN_UP_FAILURE:
    case consts.SIGN_UP_SUCCESS:
    case consts.GET_POINT_INFO_FAILURE:
    case consts.GET_POINT_INFO_SUCCESS:
    case consts.GET_BUS_SCHEDULE_BY_BUSSTOP_NAME_SUCCESS:
    case consts.GET_BUS_SCHEDULE_BY_BUSSTOP_NAME_FAILURE:
      store.dispatch({
        type: consts.CLOSE_LOADING
      });
      return next(action);
    default:
      return next(action);
  }
};

export default loading;
