import * as consts from '../src/consts';
const initialState = {
  routes: [],
  From: '',
  To: '',
  Location: {},
  Address: '',
};

function searchRoutes(state = initialState, action) {
  switch (action.type) {
    case consts.FETCH_ROUTE_SUCCESS:
      return { ...state, routes: action.response };
    case consts.INPUT_DATA:
      return {
        ...state,
        From: action.from,
        To: action.to,
      };
    case consts.GET_LOCATION_SUCCESS:
      return {
        ...state,
        Location: {
          lat: action.position.coords.latitude,
          lon: action.position.coords.longitude,
        },
      };
    case consts.GET_ADDRESS_SUCCESS:
      return {
        ...state,
        Address: action.address,
      };
    default:
      return state;
  }
}

export default searchRoutes;
