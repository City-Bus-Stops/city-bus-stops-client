import * as api from '../src/api';
import * as consts from '../src/consts';

export const inputData = (from, to) => {
  return (dispatch) => {
    dispatch({
      type: consts.INPUT_DATA,
      from,
      to
    });
    api.fetchRoute(from, to)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        dispatch({
          type: consts.FETCH_ROUTE_SUCCESS,
          response
        });
      })
      .catch((err) => {
        dispatch({
          type: consts.FETCH_ROUTE_FAILURE,
          errors: {
            FETCH_ROUTE_FAILURE: err.message
          }
        });
      });
  };
};

export const getAddress = (position, input) => {
  return (dispatch) => {
    dispatch({
      type: consts.GET_ADDRESS
    });
    api.getAddress(position)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      dispatch({
        type: consts.GET_ADDRESS_SUCCESS,
        address: response[0].address
      });
      input.onChange(response[0].address);
    })
    .catch((err) => {
      dispatch({
        type: consts.GET_ADDRESS_FAILURE,
        errors: {
          GET_ADDRESS_FAILURE: err.message
        }
      });
    });
  };
};

export const getLocation = (input) => {
  return (dispatch) => {
    dispatch({
      type: consts.GET_LOCATION
    });
    api.getLocation()
    .then((position) => {
      dispatch({
        type: consts.GET_LOCATION_SUCCESS,
        position
      });
      dispatch(getAddress(position, input));
    })
    .catch(() => {
      dispatch({
        type: consts.GET_LOCATION_FAILURE,
        errors: {
          GET_LOCATION_FAILURE: 'Denied geolocation. Check location settings in your browser'
        }
      });
    });
  };
};
