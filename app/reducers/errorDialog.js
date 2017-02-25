import * as consts from '../src/consts';
const initialState = {
  DialogFlag: false
};

function errors(state = initialState, action) {
  switch (action.type) {
    case consts.ADD_ERROR_MESSAGE:
      return {
        ...state,
        ErrorMessages: Object.assign([], state.ErrorMessages, action.errors),
        DialogFlag: true
      };
    case consts.CLOSE_ERROR_DIALOG:
      return { DialogFlag: false, ErrorMessages: [] };
    default:
      return state;
  }
}

export default errors;
