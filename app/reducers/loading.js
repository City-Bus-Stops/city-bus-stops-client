import * as consts from '../src/consts';
const initialState = {
  isLoading: false
};

function loading(state = initialState, action) {
  switch (action.type) {
    case consts.OPEN_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case consts.CLOSE_LOADING:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}

export default loading;
