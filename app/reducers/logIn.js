import * as consts from '../src/consts';

function logIn(state = {}, action) {
  switch (action.type) {
    case consts.LOG_IN_SUCCESS:
      return {
        ...state,
        ...action
      };
    case consts.LOG_IN_FAILURE:
      return {
        ...state
      };
    case consts.LOG_OUT:
      return {};
    default:
      return state;
  }
}

export default logIn;
