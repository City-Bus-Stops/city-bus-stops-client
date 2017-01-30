import * as consts from '../src/consts';

function logIn(state = {}, action) {
  switch (action.type) {
    case consts.POST_LOG_IN_DATA:
      return {
        ...state,
        email: action.email,
        password: action.password,
      };
    case consts.LOG_IN_SUCCESS:
      return {
        ...state,
        username: action.username,
      };
    case consts.LOG_IN_FAILURE:
      return {
        ...state,
      };
    case consts.LOG_OUT:
      return {};
    default:
      return state;
  }
}

export default logIn;
