import * as api from '../src/api';
import * as consts from '../src/consts';

export const signUp = (name, email, password) => {
  return (dispatch) => {
    dispatch({
      type: consts.POST_SIGN_UP_DATA,
      name,
      email,
      password,
    });

    api.SignUp({ name, email, password })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        response.success === true ?
          dispatch({
            type: consts.SIGN_UP_SUCCESS,
            title: response.title,
          })
          : dispatch({
            type: consts.SIGN_UP_FAILURE,
            title: response.title,
            errors: response.errors,
          });
      })
      .catch((err) => {
        dispatch({
          type: consts.SIGN_UP_FAILURE,
          errors: err.message,
        });
      });
  };
};
