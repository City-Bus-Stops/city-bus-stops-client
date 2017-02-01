import * as api from '../src/api';
import * as consts from '../src/consts';

export const signUp = (name, email, password) => {
  return (dispatch) => {
    dispatch({
      type: consts.POST_SIGN_UP_DATA
    });

    api.SignUp({ name, email, password })
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        response.success ?
          dispatch({
            type: consts.SIGN_UP_SUCCESS,
            response: response.data.title,
            name,
            email,
            password
          })
          : dispatch({
            type: consts.SIGN_UP_FAILURE,
            title: response.data.title,
            errors: response.data.errors
          });
      })
      .catch((err) => {
        dispatch({
          type: consts.SIGN_UP_FAILURE,
          errors: err.response.data.errors,
          title: err.response.data.title
        });
      });
  };
};
