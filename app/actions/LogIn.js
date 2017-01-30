import * as api from '../src/api';
import * as consts from '../src/consts';

export const logIn = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: consts.POST_LOG_IN_DATA,
      email,
      password,
    });
    api.LogIn({ email, password })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        response.success === true ?
          dispatch({
            type: consts.LOG_IN_SUCCESS,
            username: response.user.name,
            token: response.token,
            title: response.title,
          })
        : dispatch({
          type: consts.LOG_IN_FAILURE,
          title: response.title,
          errors: response.message,
        });
      })
      .catch((err) => {
        dispatch({
          type: consts.LOG_IN_FAILURE,
          errors: {
            error: err.message,
          },
        });
      });
  };
};

export const logOut = () => {
  return (dispatch) => {
    dispatch({
      type: consts.LOG_OUT,
    });
  };
};
