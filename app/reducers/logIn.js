import * as consts from '../src/consts';
import Auth from '../src/utils/Auth';
const initState = {
  username: Auth.getUserName()
};

function logIn(state = initState, action) {
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
