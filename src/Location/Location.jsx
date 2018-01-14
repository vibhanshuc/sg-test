import React, { Component } from 'react';
import './location.css';
import locationMarker from '../assets/images/location-icon.png';
import Heading from '../lib/Heading/Heading';

const google = window.google;

class Location extends Component {
  componentDidMount() {
    window.google.maps.event.addDomListener(window, 'load', this.init);
  }

  init = () => {
    const latLng = new google.maps.LatLng(51.512449, -0.126909);
    const mapOptions = {
      zoom: 14,
      center: latLng,
      styles: [
        {
          featureType: 'all',
          elementType: 'geometry.fill',
          stylers: [
            {
              lightness: '-100'
            },
            {
              color: '#ffdac9'
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'geometry.fill',
          stylers: [
            {
              visibility: 'on'
            },
            {
              color: '#ffcab1'
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#ffcab1'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [
            {
              lightness: 100
            },
            {
              visibility: 'simplified'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry',
          stylers: [
            {
              visibility: 'on'
            },
            {
              lightness: 700
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'all',
          stylers: [
            {
              color: '#92e1dd'
            }
          ]
        }
      ]
    };

    const map = new google.maps.Map(this.map, mapOptions);

    new google.maps.Marker({
      position: latLng,
      map: map,
      icon: locationMarker,
      title: 'Covent Garden'
    });
  };

  render() {
    return (
      <div className="location">
        <div className="location-head">
          <Heading subTitle="Location" />
          <span>12 Upper St. Martin’s Lane</span>
          <span>WC2H 9FB, London</span>
        </div>
        <div className="location-map" ref={node => (this.map = node)} />
      </div>
    );
  }
}

export default Location;
