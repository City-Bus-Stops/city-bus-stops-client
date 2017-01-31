import React, { Component } from 'react';
import L from 'leaflet';
import { Button } from 'semantic-ui-react';

import 'leaflet/dist/leaflet.css';
import 'leaflet-mapkey-icon/dist/L.Icon.Mapkey';
import 'leaflet-mapkey-icon/dist/MapkeyIcons.css';
import BusStopInfo from './BusStopInfo';

import config from '../../../config/config.json';
import * as Icons from '../../src/icons';

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      tileLayer: null,
      geoJsonLayer: null,
      geoJson: null,
      busStopInfo: false,
      info: null
    };
    this._mapNode = null;
    this.init = this.init.bind(this);
    this.addGeoJSONLayer = this.addGeoJSONLayer.bind(this);
    this.zoomToFeature = this.zoomToFeature.bind(this);
    this.pointToLayer = this.pointToLayer.bind(this);
    this.markerOnClick = this.markerOnClick.bind(this);
    this.createMarker = this.createMarker.bind(this);
    this.closeBusInfo = this.closeBusInfo.bind(this);
  }

  componentDidMount() {
    const { geoJson } = this.props;
    this.setState({
      geoJson
    });
    if (!this.state.map) {
      this.init(this._mapNode);
    }
  }

  componentDidUpdate() {
    if (this.state.geoJson && this.state.map && !this.state.geoJsonLayer) {
      // add the geojson overlay
      this.addGeoJSONLayer(this.state.geoJson);
    }
  }

  componentWillUnmount() {
    this.state.map.remove();
  }

  markerOnClick(e) {
    this.setState({
      busStopInfo: true,
      info: this.props.getInfo(this.state.geoJson, e.latlng)
    });
  }

  closeBusInfo() {
    this.setState({
      busStopInfo: false
    });
  }

  addGeoJSONLayer(geoJson) {
    const geoJsonLayer = L.geoJson(geoJson, {
      pointToLayer: this.pointToLayer,
      style: (feature) => {
        switch (feature.properties.name) {
          case 'Lines':
            return { color: 'black', weight: 5, opacity: 0.65 };
          default:
            return false;
        }
      }
    });
    geoJsonLayer.addTo(this.state.map);
    this.setState({ geoJsonLayer });
    // this.zoomToFeature(geoJsonLayer);
  }

  zoomToFeature(target) {
    const fitBoundsParams = {
      paddingTopLeft: [200, 10],
      paddingBottomRight: [10, 10]
    };
    this.state.map.fitBounds(target.getBounds(), fitBoundsParams);
  }

  createMarker(latlng, icon) {
    return L.marker(latlng, { icon }).on('click', this.markerOnClick);
  }

  pointToLayer(feature, latlng) {
    switch (feature.properties.type) {
      case 'start': {
        // set map center on start point
        this.state.map.setView(latlng, 16);
        return this.createMarker(latlng, Icons.startIcon);
      }
      case 'end':
        return this.createMarker(latlng, Icons.endIcon);
      case 'bus_stop':
        return this.createMarker(latlng, Icons.busIcon);
      default:
        return this.createMarker(latlng);
    }
  }

  init(id) {
    if (this.state.map) {
      return;
    }
    const map = L.map(id, config.map.config);
    const tileLayer = L.tileLayer(config.map.tileLayer.uri, config.map.tileLayer.params).addTo(map);

    this.setState({ map, tileLayer });
  }

  render() {
    const { busStopInfo, info } = this.state;
    const { changeMapState } = this.props;

    return (
      <div>
        {
          busStopInfo &&
          <BusStopInfo
            close={this.closeBusInfo}
            open={busStopInfo}
            info={info}
          />
        }
        <div id="map">
          <div ref={node => this._mapNode = node} />
        </div>
        <Button
          content="Close"
          compact={true}
          color="blue"
          fluid
          size="large"
          onClick={() => {
            changeMapState();
          }}
        />
      </div>
    );
  }
}

export default MapComponent;
