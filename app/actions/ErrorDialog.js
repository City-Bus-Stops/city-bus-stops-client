import * as consts from '../src/consts';

export const closeDialog = () => {
  return (dispatch) => {
    dispatch({
      type: consts.CLOSE_ERROR_DIALOG,
    });
  };
};

export const badInput = () => {
  return (dispatch) => {
    dispatch({
      type: consts.BAD_INPUT_VALUE,
      errors: [{
        type: 'Bad Input Value',
        messages: ['Please check your inputs'],
      }]
    });
  };
};
