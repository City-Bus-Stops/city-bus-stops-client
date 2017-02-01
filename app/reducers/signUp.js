import * as consts from '../src/consts';

function signUp(state = {}, action) {
  switch (action.type) {
    case consts.POST_SIGN_UP_DATA:
      return {
        ...state
      };
    case consts.SIGN_UP_SUCCESS:
      return {
        ...state,
        ...action
      };
    case consts.SIGN_UP_FAILURE:
      return {
        ...state,
        response: action.title
      };
    default:
      return state;
  }
}

export default signUp;
