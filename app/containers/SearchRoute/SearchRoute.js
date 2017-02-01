import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import * as actions from '../../actions';
import * as errorActions from '../../actions/ErrorDialog';
import InputForm from '../../components/SearchRoute/InputForm';
import Routes from '../../components/Routes/Routes';
import MapComponent from '../../components/Map/MapComponent';

import geoJson from '../../src/mock-geo-json';

class SearchRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMap: false
    };
    this.getGeoJsonById = this.getGeoJsonById.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.changeMapState = this.changeMapState.bind(this);
    this.personLocation = this.personLocation.bind(this);
    this.searchRoute = this.searchRoute.bind(this);
  }

  getGeoJsonById() {
    /* const routeId = this.props.params.routeId;
    const routes = this.props.SearchRouteState.routes;
    return _.find(routes, ['id', routeId]).geoJson;*/
    return geoJson;
  }

  getInfo(geoJson, latlng) {
    const idx = _.findIndex(this.getGeoJsonById(), (point) => {
      return _.isEqual(point.geometry.coordinates, [latlng.lng, latlng.lat]);
    });
    return geoJson[idx].info || {};
  }

  searchRoute(from, to) {
    const { badInput, inputData } = this.props.SearchRoutes;
    if (!from || !to) {
      badInput();
      return;
    }
    inputData(from, to);
  }

  personLocation(input) {
    const { getLocation } = this.props.SearchRoutes;
    getLocation(input);
  }

  changeMapState() {
    this.setState({
      showMap: !this.state.showMap
    });
  }

  render() {
    const { From, To, routes } = this.props.SearchRouteState;
    const { showMap } = this.state;

    return (
      <div>
        {
          _.isEqual(showMap, true) ?
            <MapComponent
              geoJson={geoJson}
              getInfo={this.getInfo}
              changeMapState={this.changeMapState}
            /> :
            <div>
              <InputForm
                personLocation={this.personLocation}
                searchRoute={this.searchRoute}
              />
              {
                From && To && routes &&
                <Routes
                  From={From}
                  To={To}
                  routes={routes}
                  changeMapState={this.changeMapState}
                />
              }
            </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    SearchRouteState: state.searchRoute
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SearchRoutes: bindActionCreators({ ...actions, ...errorActions }, dispatch)
  };
};

SearchRoute = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchRoute);

export default SearchRoute;