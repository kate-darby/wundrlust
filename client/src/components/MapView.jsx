import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import GOOGLE_API_KEY from '../../../config.js'
import { Map, GoogleApiWrapper } from 'google-maps-react';

export const ModalOverlay = styled.div`
  font-family: 'Roboto', sans-serif;
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);

`;



const mapStyles = {
  position: 'absolute',
  zIndex: '2',
  width: '50vw',
  height: '40vh',
  margin: '200px auto'
};

const MapView = (props) => {

  return (
    <Map
      google={props.google}
      zoom={10}
      style={mapStyles}
      initialCenter={
        {
          lat: 59.32932349999999,
          lng: 18.0685808
        }
      }
    />
  );
}


  export default GoogleApiWrapper({
    apiKey: GOOGLE_API_KEY
  })(MapView);