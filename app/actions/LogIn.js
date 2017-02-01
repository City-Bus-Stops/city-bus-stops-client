import * as api from '../src/api';
import * as consts from '../src/consts';

export const logIn = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: consts.POST_LOG_IN_DATA
    });
    api.LogIn({ email, password })
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        response.success === true ?
          dispatch({
            type: consts.LOG_IN_SUCCESS,
            username: response.user.name,
            token: response.token,
            title: response.title,
            email,
            password
          })
        : dispatch({
          type: consts.LOG_IN_FAILURE,
          title: response.title,
          errors: response.message
        });
      })
      .catch((err) => {
        dispatch({
          type: consts.LOG_IN_FAILURE,
          errors: err.response.data.errors
        });
      });
  };
};

export const logOut = () => {
  return (dispatch) => {
    dispatch({
      type: consts.LOG_OUT
    });
  };
};
