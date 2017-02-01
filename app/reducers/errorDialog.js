import * as consts from '../src/consts';
const initialState = {
  DialogFlag: false
};

function Errors(state = initialState, action) {
  switch (action.type) {
    case consts.ADD_ERROR_MESSAGE:
      return {
        ...state,
        errorType: action.errorType,
        ErrorMessages: Object.assign({}, state.ErrorMessages, action.errors),
        DialogFlag: true,
        errorTitle: action.errorTitle
      };
    case consts.OPEN_DIALOG:
      return { ...state, DialogFlag: true };
    case consts.CLOSE_DIALOG:
      return { DialogFlag: false, ErrorMessages: {} };
    default:
      return state;
  }
}

export default Errors;
