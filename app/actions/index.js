import _ from 'lodash';
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
        return response.data;
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

export const getAddress = (lat, lon, input) => {
  return (dispatch) => {
    dispatch({
      type: consts.GET_ADDRESS
    });
    api.getAddress(lat, lon)
    .then((response) => {
      return _.head(response.data).address;
    })
    .then((address) => {
      dispatch({
        type: consts.GET_ADDRESS_SUCCESS,
        address
      });
      input.onChange(address);
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
        lat: position.coords.latitude,
        lon: position.coords.longitude
      });
      dispatch(getAddress(position.coords.latitude, position.coords.longitude, input));
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

export const getBusScheduleByBusstop = (props) => {
  return (dispatch) => {
    dispatch({
      type: consts.GET_BUS_SCHEDULE_BY_BUSSTOP_NAME
    });
    api.getBusScheduleByBusstop(props)
      .then((response) => {
        dispatch({
          type: consts.GET_BUS_SCHEDULE_BY_BUSSTOP_NAME_SUCCESS,
          id: response.data.id,
          points: response.data.points
        });
      })
      .catch((err) => {
        dispatch({
          type: consts.GET_BUS_SCHEDULE_BY_BUSSTOP_NAME_FAILURE,
          errors: err.response.data.errors
        });
      });
  };
};

export const removePoints = () => {
  return (dispatch) => {
    dispatch({
      type: consts.REMOVE_POINTS
    });
  };
};
