import * as consts from '../src/consts';

function signUp(state = {}, action) {
  switch (action.type) {
    case consts.POST_SIGN_UP_DATA:
      return {
        ...state,
        name: action.name,
        email: action.email,
        password: action.password
      };
    case consts.SIGN_UP_SUCCESS:
      return {
        ...state,
        response: action.title
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
