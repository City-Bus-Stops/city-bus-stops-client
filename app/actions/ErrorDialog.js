import * as consts from '../src/consts';

export const closeDialog = () => {
  return (dispatch) => {
    dispatch({
      type: consts.CLOSE_DIALOG,
    });
  };
};

export const badInput = () => {
  return (dispatch) => {
    dispatch({
      type: consts.BAD_INPUT_VALUE,
      title: 'Bad input',
      errors: {
        BAD_INPUT_VALUE: 'Please check your inputs',
      },
    });
  };
};
