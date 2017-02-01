import * as consts from '../src/consts';

function searchRoutes(state = {}, action) {
  switch (action.type) {
    case consts.FETCH_ROUTE_SUCCESS:
      return { ...state, routes: action.response };
    case consts.INPUT_DATA:
      return {
        ...state,
        From: action.from,
        To: action.to
      };
    case consts.GET_LOCATION_SUCCESS:
      return {
        ...state,
        Location: {
          lat: action.lat,
          lon: action.lon
        }
      };
    case consts.GET_ADDRESS_SUCCESS:
      return {
        ...state,
        Address: action.address
      };
    default:
      return state;
  }
}

export default searchRoutes;
