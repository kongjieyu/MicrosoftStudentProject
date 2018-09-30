import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  constructor() {
  super();
  this.state = {
    zoom: 13,
    maptype: 'roadmap',
  }
}
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.props.onClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
      </Map>
    );
  }
}
 
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBXOfFdXqwHZT1yetcrFC_OuSiQcAYOXos")
})(MapContainer)